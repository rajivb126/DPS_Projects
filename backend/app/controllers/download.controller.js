const download = require('../models/download');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueFileName = (new Date().getTime())
        cb(null, uniqueFileName + file.originalname)
    }
})

const upload = multer({ storage: storage });

// Add API for Download
exports.addDownload = async (request, response) => {
    upload.single('download_link')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let startDate;
        let endDate;

        // Check if start_date is provided, otherwise set to current date
        if (request.body.start_date) {
            startDate = new Date(request.body.start_date);
        } else {
            startDate = new Date();
        }

        // Check if end_date is provided, otherwise set to next month
        if (request.body.end_date) {
            endDate = new Date(request.body.end_date);
        } else {
            endDate = new Date(startDate);
            endDate.setMonth(endDate.getMonth() + 1); // Set end_date to one month after start_date
        }

        let data = new download({
            'download_heading': request.body.download_heading,
            'download_link': request.file.filename,
            'start_date': startDate,
            'end_date': endDate
        });

        try {
            const insertData = await data.save();
            var arr = {
                'status': true,
                'message': 'Record Inserted Successfully!!',
                'data': insertData
            };
            response.send(arr);
        } catch (err) {
            response.status(500).json({ message: err.message });
        }
    });
};

// View API for Download
exports.viewDownload = async (request, response) => {
    const downloadData = await download.find();

    if (downloadData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': downloadData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': downloadData
        };
    }

    response.send(arr);
};

// Update API for Download
exports.updateDownload = async (request, response) => {
    upload.single('download_link')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `download_link` field with its path
            if (request.file) {
                updateData.download_link = request.file.filename;
            }

            const result = await download.findOneAndUpdate(
                { _id: id },
                { $set: updateData },
                { new: true }
            );

            if (result) {
                response.status(200).send({ message: 'Record updated successfully', result });
            } else {
                response.status(404).send({ message: 'Record not found' });
            }
        } catch (error) {
            response.status(500).send({ message: 'Server error', error });
        }
    });
};

// Delete API for Download
exports.deleteDownload = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await download.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
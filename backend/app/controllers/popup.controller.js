const Popup = require('../models/popup');
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

// Add API for Popup
exports.addPopup = async (request, response) => {
    upload.single('popup_image')(request, response, async function (err) {
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

        let data = new Popup({
            'popup_header': request.body.popup_header,
            'popup_image': request.file.filename,
            'popup_link': request.body.popup_link,
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

// View API for Popup
exports.viewPopup = async (request, response) => {
    const popupData = await Popup.find();

    if (popupData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': popupData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': popupData
        };
    }

    response.send(arr);
};

// Update API For Popup
exports.updatePopup = async (request, response) => {
    upload.single('popup_image')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body };

            if (request.file) {
                updateData.popup_image = request.file.filename;
            }

            const result = await Popup.findOneAndUpdate(
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

// Delete API For Popup
exports.deletePopup = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Popup.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
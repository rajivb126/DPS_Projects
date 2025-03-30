const newsUpdate = require('../models/newsUpdate');
const mongodb = require('mongodb');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../../uploads'); // ✅ Corrected path
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_'); // ✅ Replace spaces with "_"
        cb(null, uniqueFileName);
    }
});

const upload = multer({ storage: storage })


// Add API for News Update
exports.addNews = async (request, response) => {
    upload.single('nlink')(request, response, async function (err) {
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

        let data = new newsUpdate({
            'nname': request.body.nname,
            'news_category': request.body.news_category,
            'nlink': request.file.filename,
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



// Filter API for News Update
exports.filterNews = async (request, response) => {
    let newsData = await newsUpdate.find({
        "$or": [
            { "nname": { $regex: request.params.filter } }
        ]
    });

    if (newsData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': newsData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': newsData
        };
    }

    response.send(arr);
};

// View API for News Update
exports.viewNews = async (request, response) => {
    const newsData = await newsUpdate.find();

    if (newsData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': newsData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': newsData
        };
    }

    response.send(arr);
};

// Update API for News
exports.updateNews = async (request, response) => {
    upload.single('nlink')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `nlink` field with its path
            if (request.file) {
                updateData.nlink = request.file.filename;
            }

            const result = await newsUpdate.findOneAndUpdate(
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

// Delete API for News Update
exports.deleteNews = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await newsUpdate.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
const schoolnews = require('../models/schoolNews');
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

const upload = multer({ storage: storage });

// Add API for School News
exports.addSchoolnews = async (request, response) => {
    upload.single('schoolnews_link')(request, response, async function (err) {
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

        let data = new schoolnews({
            'schoolnews_heading': request.body.schoolnews_heading,
            'schoolnews_link': request.file.filename,
            'schoolnews_description': request.body.schoolnews_description,
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

// View API for School News
exports.viewSchoolnews = async (request, response) => {
    const schoolnewsData = await schoolnews.find();

    if (schoolnewsData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': schoolnewsData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': schoolnewsData
        };
    }

    response.send(arr);
};

// Update API for School News
exports.updateSchoolnews = async (request, response) => {
    upload.single('schoolnews_link')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `schoolnews_link` field with its path
            if (request.file) {
                updateData.schoolnews_link = request.file.filename;
            }

            const result = await schoolnews.findOneAndUpdate(
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

// Delete API for School News
exports.deleteSchoolnews = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await schoolnews.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
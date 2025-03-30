const Infrastructure = require('../models/infrastructure');
const fs = require('fs');
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

// Add API for Infrastructure
exports.addInfrastructure = async (request, response) => {
    upload.array('infrastructure_image', 10)(request, response, async function (err) { // Allow up to 10 files
        if (err) {
            return response.status(400).json({ status: false, message: `File upload error: ${err.message}` });
        }

        try {
            // Validate if files exist
            if (!request.files || request.files.length === 0) {
                return response.status(400).json({ status: false, message: 'No files uploaded.' });
            }

            // Extract filenames from uploaded files
            const filenames = request.files.map(file => file.filename);

            // Default dates
            let startDate = request.body.start_date ? new Date(request.body.start_date) : new Date();
            let endDate = request.body.end_date ? new Date(request.body.end_date) : new Date(startDate.setMonth(startDate.getMonth() + 1));

            // Create infrastructure record
            let data = new Infrastructure({
                infrastructure_category: request.body.infrastructure_category,
                infrastructure_image: filenames, // Save array of filenames
                start_date: startDate,
                end_date: endDate
            });

            // Save to database
            const insertData = await data.save();

            // Success response
            return response.status(201).json({
                status: true,
                message: 'Record Inserted Successfully!',
                data: insertData
            });
        } catch (err) {
            // Handle any unexpected errors
            return response.status(500).json({ status: false, message: `Error: ${err.message}` });
        }
    });
};

// View API for Infrastructure
exports.viewInfrastructure = async (request, response) => {
    const infrastructureData = await Infrastructure.find();

    if (infrastructureData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': infrastructureData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': infrastructureData
        };
    }

    response.send(arr);
};

// Updated API for Infrastructure
exports.updateInfrastructure = async (request, response) => {
    upload.single('infrastructure_image')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `achievement_file` field with its path
            if (request.file) {
                updateData.infrastructure_image = request.file.filename;
            }

            const result = await Infrastructure.findOneAndUpdate(
                { _id: id },
                { $set: updateData },
                { new: true }
            );

            if (result) {
                response.status(200).json({ message: 'Record updated successfully', result });
            } else {
                response.status(404).json({ message: 'Record not found' });
            }
        } catch (error) {
            console.error('Error updating achievement:', error); // Log the error for debugging
            response.status(500).json({ message: 'Server error', error });
        }
    });
};

// Delete API for Infrastructure
exports.deleteInfrastructure = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Infrastructure.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};

// 
exports.deleteImage = async (request, response) => {
    const { imageName } = request.params;
    const filePath = `uploads/${imageName}`;

    // Check if the file exists
    fs.stat(filePath, (err, stats) => {
        if (err) {
            return response.status(404).json({ message: 'Image not found' });
        }

        // Delete the image from the server
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return response.status(500).json({ message: 'Failed to delete image' });
            }
            return response.status(200).json({ message: 'Image deleted successfully' });
        });
    });
};
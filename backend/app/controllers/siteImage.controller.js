const siteImage = require('../models/siteImage');
const multer = require('multer');
const BASE_URL = 'https://dpsjod.in/backend/';
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

const upload = multer({ storage });

// Image upload endpoint
exports.addSiteImage = async (request, response) => {
    upload.single('site_image_file')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: `File upload error: ${err.message}` });
        }

        // Check if a file is provided
        if (!request.file) {
            return response.status(400).json({ message: 'No file uploaded' });
        }

        // Construct the full file path
        const filePath = `${BASE_URL}/uploads/${request.file.filename}`;

        // Create new document in the database
        let data = new siteImage({
            site_image_file: filePath, // Save full path instead of just filename
        });

        try {
            const insertData = await data.save();
            response.status(200).json({
                status: true,
                message: 'Record Inserted Successfully!!',
                data: insertData,
            });
        } catch (err) {
            response.status(500).json({ message: `Database error: ${err.message}` });
        }
    });
};

// View API for Student Council Image
exports.viewSiteImage = async (request, response) => {
    const siteImageData = await siteImage.find();

    if (siteImageData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': siteImageData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': siteImageData
        };
    }

    response.send(arr);
};

// Update API for News
exports.updateSiteImage = async (request, response) => {
    upload.single('site_image_file')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `site_image_file` field with its path
            if (request.file) {
                updateData.site_image_file = request.file.filename;
            }

            const result = await siteImage.findOneAndUpdate(
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
exports.deleteSiteImage = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await siteImage.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
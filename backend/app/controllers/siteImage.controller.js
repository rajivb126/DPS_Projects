const siteImage = require('../models/siteImage');
const multer = require('multer');
const BASE_URL = 'https://dpsjodhpur.in/backend';
const path = require('path');

// ✅ File filter: Allows only images (JPEG, PNG, GIF)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files (JPG, PNG, GIF) are allowed!'), false);
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../../uploads'); // ✅ Corrected path
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueFileName = file.originalname.replace(/\s+/g, '_'); // ✅ Replace spaces with "_"
        cb(null, uniqueFileName);
    }
});

const upload = multer({ 
    storage, 
    fileFilter 
});

// Image upload for adding a new site image
exports.addSiteImage = async (request, response) => {
    upload.single('site_image_file')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: `File upload error: ${err.message}` });
        }

        let uploadDate;

        // Check if upload_date is provided, otherwise set to current date
        if (request.body.upload_date) {
            uploadDate = new Date(request.body.upload_date);
        } else {
            uploadDate = new Date();
        }

        // Check if a file is provided
        if (!request.file) {
            return response.status(400).json({ message: 'No file uploaded' });
        }

        // Construct the full file path
        const filePath = `${BASE_URL}/uploads/${request.file.filename}`;

        // ✅ Check if the file already exists in the database
        const existingFile = await siteImage.findOne({ site_image_file: filePath });
        if (existingFile) {
            return response.status(400).json({ message: 'File already exists!' });
        }

        // Create new document in the database
        let data = new siteImage({
            site_image_file: filePath, // Save full path instead of just filename
            upload_date: uploadDate
        });

        try {
            const insertData = await data.save();
            response.status(200).json({
                status: true,
                message: 'Record Inserted Successfully!',
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

// Update API for Site Image
exports.updateSiteImage = async (request, response) => {
    upload.single('site_image_file')(request, response, async function (err) {
        if (err) {
            return response.status(500).json({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get updated fields from the request body

            // If a file was uploaded, update the `site_image_file` field with its full path
            if (request.file) {
                const filePath = `${BASE_URL}/uploads/${request.file.filename}`;

                // ✅ Check if the same file already exists in the database
                const existingFile = await siteImage.findOne({ site_image_file: filePath });

                if (existingFile) {
                    return response.status(400).json({ message: 'File already exists!' });
                }

                updateData.site_image_file = filePath; // Update file path
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
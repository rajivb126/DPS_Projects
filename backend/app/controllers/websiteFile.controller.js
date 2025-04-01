const websiteFile = require('../models/websiteFile');
const multer = require('multer');
const BASE_URL = 'https://dpsjodhpur.in/backend';
const path = require('path');

// ✅ File filter: Allows only documents (PDF, DOC, DOCX, XLS, XLSX)
const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only document files (PDF, DOC, DOCX, XLS, XLSX) are allowed!'), false);
    }
};

// ✅ Storage configuration (No timestamp, keeps original filename)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../../uploads');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const cleanFileName = file.originalname.replace(/\s+/g, '_'); // ✅ Remove spaces
        cb(null, cleanFileName);
    }
});

// ✅ Multer instance with file filter
const upload = multer({
    storage,
    fileFilter
});

// ✅ File Upload API (Only Files Allowed)
exports.addWebsiteFile = async (request, response) => {
    upload.single('website_file')(request, response, async function (err) {
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
        let data = new websiteFile({
            website_file: filePath, // Save full path instead of just filename
        });

        try {
            const insertData = await data.save();
            response.status(200).json({
                status: true,
                message: 'File uploaded successfully!',
                data: insertData,
            });
        } catch (err) {
            response.status(500).json({ message: `Database error: ${err.message}` });
        }
    });
};

// View API for Student Council Image
exports.viewWebsiteFile = async (request, response) => {
    const WebsiteFileData = await websiteFile.find();

    if (WebsiteFileData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': WebsiteFileData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': WebsiteFileData
        };
    }

    response.send(arr);
};

// Update API for Site Image
exports.updateWebsiteFile = async (request, response) => {
    upload.single('website_file')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `website_file` field with its full path
            if (request.file) {
                const filePath = `${BASE_URL}/uploads/${request.file.filename}`;

                // Check if the same file already exists in the database
                const existingFile = await websiteFile.findOne({ website_file: filePath });

                if (existingFile) {
                    return response.status(400).json({ message: 'File already exists!' });
                }

                updateData.website_file = filePath;
            }

            const result = await WebsiteFile.findOneAndUpdate(
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
exports.deleteWebsiteFile = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await websiteFile.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
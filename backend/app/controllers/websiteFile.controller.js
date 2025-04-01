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

        try {
            // ✅ Check if a file with the same path already exists
            const existingFile = await websiteFile.findOne({ website_file: filePath });

            if (existingFile) {
                return response.status(400).json({ message: 'File already exists!' });
            }

            // ✅ If no duplicate, save the new file record
            let data = new websiteFile({
                website_file: filePath,
            });

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
            return response.status(500).json({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get updated fields from the request body

            // Find existing file entry by ID
            const existingEntry = await websiteFile.findById(id);
            if (!existingEntry) {
                return response.status(404).json({ message: 'Record not found' });
            }

            // If a new file is uploaded
            if (request.file) {
                const filePath = `${BASE_URL}/uploads/${request.file.filename}`;

                // ✅ Check if another entry already has this file
                const duplicateFile = await websiteFile.findOne({ website_file_file: filePath });

                if (duplicateFile && duplicateFile._id.toString() !== id) {
                    return response.status(400).json({ message: 'File already exists!' });
                }

                updateData.website_file_file = filePath; // Update file path
            }

            // ✅ Update the database entry
            const updatedRecord = await websiteFile.findByIdAndUpdate(
                id,
                { $set: updateData },
                { new: true }
            );

            response.status(200).json({
                message: 'Record updated successfully',
                data: updatedRecord,
            });

        } catch (error) {
            response.status(500).json({ message: 'Server error', error });
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
const Assembly = require('../models/assembly');
const multer = require('multer');
const fs = require('fs')
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

const upload = multer({
    storage: storage
});

// Add Assembly API with Thumbnail and Multiple Assembly Files
exports.addAssembly = async (request, response) => {
    upload.fields([
        { name: 'thumbnail_image', maxCount: 1 },
        { name: 'assembly_files', maxCount: 30 }
    ])(request, response, async function (err) {
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

        const thumbnailFile = request.files['thumbnail_image'] ? request.files['thumbnail_image'][0].filename : null;
        const assemblyFiles = request.files['assembly_files'] ? request.files['assembly_files'].map(file => file.filename) : [];

        const event = new Assembly({
            title: request.body.title,
            description: request.body.description,
            slug: request.body.slug,
            thumbnail_image: thumbnailFile, // Single thumbnail image
            assembly_date: request.body.assembly_date,
            assembly_files: assemblyFiles, // Array of event file names
            start_date: startDate,
            end_date: endDate,
        });

        try {
            const savedAssembly = await event.save();
            return response.status(201).json({
                status: true,
                message: 'Assembly created successfully!',
                data: savedAssembly,
            });
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    });
};

// VIEW API to view an assembly by its slug
exports.viewAssembly = async (request, response) => {
    const { slug } = request.params;

    try {
        const assembly = await Assembly.findOne({ slug });

        if (!assembly) {
            return response.status(404).json({ message: 'Assembly not found' });
        }

        response.json(assembly);
    } catch (error) {
        response.status(500).json({ message: 'Internal Server Error' });
    }
};


// 
exports.viewAllAssembly = async (request, response) => {
    const assemblyData = await Assembly.find();

    if (assemblyData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': assemblyData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': assemblyData
        };
    }

    response.send(arr);
};

// Dashboard Stats for Assembly API
exports.getDashboardStatsAssembly = async (request, response) => {
    try {
        const totalAssembly = await Assembly.countDocuments(); // Total number of assembly

        // Active assembly are those without an end date or with an end date in the future
        const activeAssembly = await Assembly.countDocuments({
            $or: [
                { end_date: { $exists: false } }, 
                { end_date: { $gte: new Date() } }
            ]
        });

        response.status(200).json({ totalAssembly, activeAssembly });
    } catch (error) {
        response.status(500).json({ message: "Error fetching assembly stats", error });
    }
};


// Update API for Assembly
exports.updateAssembly = async (request, response) => {
    upload.fields([
        { name: 'thumbnail_image', maxCount: 1 },
        { name: 'assembly_files', maxCount: 30 }
    ])(request, response, async (err) => {
        if (err) {
            return response.status(400).json({ message: 'File upload error', error: err.message });
        }

        try {
            const { id } = request.params;  // Get the ID from the request parameters
            const updateData = { ...request.body };  // Copy the updated data from the request body

            // Handle file uploads if they exist
            if (request.files?.['thumbnail_image']) {
                updateData.thumbnail_image = request.files['thumbnail_image'][0].filename;
            }

            if (request.files?.['assembly_files']) {
                updateData.assembly_files = request.files['assembly_files'].map(file => file.filename);
            }

            // Find and update the document
            const result = await Assembly.findOneAndUpdate(
                { _id: id },  // Search for the document by its ID
                { $set: updateData },  // Set the updated fields
                { new: true }  // Return the updated document
            );

            if (result) {
                response.status(200).json({ message: 'Record updated successfully', result });
            } else {
                response.status(404).json({ message: 'Record not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Server error', error: error.message });
        }
    });
};

// DELETE API to delete an assembly by its slug
exports.deleteAssembly = async (request, response) => {
    const { slug } = request.params;

    try {
        const deletedAssembly = await Assembly.findOneAndDelete({ slug });

        if (!deletedAssembly) {
            return response.status(404).json({ message: 'Event not found' });
        }

        return response.json({
            status: true,
            message: 'Event deleted successfully!',
            data: deletedAssembly,
        });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
};

exports.deleteAllAssembly = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Assembly.deleteOne({ _id: id });
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
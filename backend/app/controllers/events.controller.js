const Event = require('../models/events');
const multer = require('multer');
const fs = require('fs').promises;
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
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// Add Event API with Thumbnail and Multiple Event Files
exports.addEvent = async (request, response) => {
    upload.fields([
        { name: 'thumbnail_image', maxCount: 1 },
        { name: 'event_files', maxCount: 30 }
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
        const eventFiles = request.files['event_files'] ? request.files['event_files'].map(file => file.filename) : [];

        const event = new Event({
            title: request.body.title,
            description: request.body.description,
            slug: request.body.slug,
            thumbnail_image: thumbnailFile, // Single thumbnail image
            event_date: request.body.event_date,
            event_files: eventFiles, // Array of event file names
            start_date: startDate,
            end_date: endDate,
        });

        try {
            const savedEvent = await event.save();
            return response.status(201).json({
                status: true,
                message: 'Event created successfully!',
                data: savedEvent,
            });
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    });
};

// VIEW API to view an event by its slug
exports.viewEvent = async (request, response) => {
    const { slug } = request.params;

    try {
        const event = await Event.findOne({ slug });

        if (!event) {
            return response.status(404).json({ message: 'Event not found' });
        }

        response.json(event);
    } catch (error) {
        response.status(500).json({ message: 'Internal Server Error' });
    }
};


// 
exports.viewAllEvent = async (request, response) => {
    const eventData = await Event.find();

    if (eventData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': eventData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': eventData
        };
    }

    response.send(arr);
};

// Dashboard Stats for Event API
exports.getDashboardStats = async (req, res) => {
    try {
        const totalEvents = await Event.countDocuments(); // Total number of events

        // Active events are those without an end date or with an end date in the future
        const activeEvents = await Event.countDocuments({
            $or: [
                { end_date: { $exists: false } }, // Events without an end_date
                { end_date: { $gte: new Date() } } // Events where end_date is in the future
            ]
        });

        res.status(200).json({ totalEvents, activeEvents });
    } catch (error) {
        res.status(500).json({ message: "Error fetching event stats", error });
    }
};


// Update API for Download
exports.updateEvent = async (request, response) => {
    upload.fields([
        { name: 'thumbnail_image', maxCount: 1 },
        { name: 'event_files', maxCount: 30 }
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

            if (request.files?.['event_files']) {
                updateData.event_files = request.files['event_files'].map(file => file.filename);
            }

            // Find and update the document
            const result = await Event.findOneAndUpdate(
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

// DELETE API to delete an event by its slug
exports.deleteEvent = async (request, response) => {
    const { slug } = request.params;

    try {
        const deletedEvent = await Event.findOneAndDelete({ slug });

        if (!deletedEvent) {
            return response.status(404).json({ message: 'Event not found' });
        }

        return response.json({
            status: true,
            message: 'Event deleted successfully!',
            data: deletedEvent,
        });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
};

exports.deleteAllEvent = async (request, response) => {
    try {
        const { id } = request.params;

        // Check if event exists
        const event = await Event.findById(id);
        if (!event) {
            return response.status(404).json({ message: 'Event not found' });
        }

        // Delete associated images & files
        if (event.thumbnail_image) {
            fs.unlink(path.join(__dirname, '../../uploads', event.thumbnail_image), (err) => {
                if (err) console.error("Error deleting thumbnail:", err);
            });
        }

        if (event.event_files.length > 0) {
            event.event_files.forEach(file => {
                fs.unlink(path.join(__dirname, '../../uploads', file), (err) => {
                    if (err) console.error(`Error deleting file ${file}:`, err);
                });
            });
        }

        // Delete event from the database
        await Event.deleteOne({ _id: id });

        return response.status(200).json({ message: 'Event and associated files deleted successfully' });
    } catch (error) {
        return response.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete Image 
exports.deleteImage = async (request, response) => {
    try {
        const { imageName } = request.params;

        // Prevent path traversal
        if (imageName.includes('..')) {
            console.log('Invalid file name attempt:', imageName);
            return response.status(400).json({ message: 'Invalid file name' });
        }

        const filePath = path.join(__dirname, '../../uploads', imageName);

        console.log(`Checking if file exists: ${filePath}`);
        await fs.access(filePath); // Check if file exists
        console.log('File exists. Proceeding to delete.');

        await fs.unlink(filePath); // Delete file
        console.log(`Image deleted successfully: ${imageName}`);

        return response.status(200).json({ message: 'Image deleted successfully' });
    } catch (err) {
        console.error('Error deleting image:', err);
        return response.status(500).json({ message: 'Error deleting image', error: err.message });
    }
};
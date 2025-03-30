const newsletter = require('../models/newsletter');
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

// Add API of Newsletter
exports.addNewsletter = async (request, response) => {
    upload.single('newsletter_link')(request, response, async function (err) {
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

        let data = new newsletter({
            'newsletter_heading': request.body.newsletter_heading,
            'newsletter_link': request.file.filename,
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

// View API of Newsletter
exports.viewNewsletter = async (request, response) => {
    const newsletterData = await newsletter.find();

    if (newsletterData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': newsletterData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': newsletterData
        };
    }

    response.send(arr);
};

// Dashboard Stats for Newsletter API
exports.getDashboardStatsNewsletter = async (request, response) => {
    try {
        const totalNewsletter = await newsletter.countDocuments(); // Total number of events

        // Active events are those without an end date or with an end date in the future
        const activeNewsletter = await newsletter.countDocuments({
            $or: [
                { end_date: { $exists: false } }, // Events without an end_date
                { end_date: { $gte: new Date() } } // Events where end_date is in the future
            ]
        });

        response.status(200).json({ totalNewsletter, activeNewsletter });
    } catch (error) {
        response.status(500).json({ message: "Error fetching event stats", error });
    }
};

// Update API for Newsletter
exports.updateNewsletter = async (request, response) => {
    upload.single('newsletter_link')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `newsletter_link` field with its path
            if (request.file) {
                updateData.newsletter_link = request.file.filename;
            }

            const result = await newsletter.findOneAndUpdate(
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

// Delete API for Newsletter
exports.deleteNewsletter = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await newsletter.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
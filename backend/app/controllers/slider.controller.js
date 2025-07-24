const Slider = require('../models/slider');
const multer = require('multer');
const path = require('path');

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

// Multer file filter for videos only
const fileFilter = function (req, file, cb) {
    const filetypes = /mp4|avi|mkv|mov/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb(new Error('Only video files are allowed!'));
    }
};

// Initialize multer with storage and filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 100 * 1024 * 1024 } // Limit to 100MB
});

// Add API for Slider
exports.addSlider = async (request, response) => {
    upload.single('video_url')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let data = new Slider({
            
            video_url: request.file.filename,
        });

        try {
            const insertData = await data.save();
            response.send({
                status: true,
                message: 'Record Inserted Successfully!',
                data: insertData
            });
        } catch (err) {
            response.status(500).json({ message: err.message });
        }
    });
};

// View API for Slider
exports.viewSlider = async (request, response) => {
    try {
        const sliderData = await Slider.find();
        response.send({
            status: sliderData.length !== 0,
            message: sliderData.length ? "Record Found Successfully" : "No Record Found!",
            data: sliderData
        });
    } catch (error) {
        response.status(500).json({ message: 'Server error', error });
    }
};

// Update API For Slider
exports.updateSlider = async (request, response) => {
    upload.single('video_url')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body };

            if (request.file) {
                updateData.video_url = request.file.filename;
            }

            const result = await Slider.findOneAndUpdate(
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

// Delete API For Slider
exports.deleteSlider = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Slider.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
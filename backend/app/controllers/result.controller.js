const Result = require('../models/result');
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

// Add API for Result
exports.addResult = async (request, response) => {
    upload.single('result_file')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let data = new Result({
            
            result_file: request.file.filename,
            result_category: request.body.result_category
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

// View API for Result
exports.viewResult = async (request, response) => {
    try {
        const resultData = await Result.find();
        response.send({
            status: resultData.length !== 0,
            message: resultData.length ? "Record Found Successfully" : "No Record Found!",
            data: resultData
        });
    } catch (error) {
        response.status(500).json({ message: 'Server error', error });
    }
};

// Update API For Result
exports.updateResult = async (request, response) => {
    upload.single('result_file')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body };

            if (request.file) {
                updateData.result_file = request.file.filename;
            }

            const result = await Result.findOneAndUpdate(
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

// Delete API For Result
exports.deleteResult = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Result.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
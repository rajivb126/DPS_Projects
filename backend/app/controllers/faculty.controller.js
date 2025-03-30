const faculty = require('../models/faculty');
const multer = require('multer');

const fs = require('fs');

const uploads = path.join(__dirname, 'uploads');

// Ensure the uploads folder exists
if (!fs.existsSync(uploads)) {
    fs.mkdirSync(uploads, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploads); // Use absolute path
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + "_" + file.originalname.replace(/\s+/g, '_');
        cb(null, uniqueFileName);
    }
});

const upload = multer({ storage: storage });

// Add API for Faculty 
exports.addFaculty = async (request, response) => {
    upload.single('teacher_image')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let data = new faculty({
            'teacher_name': request.body.teacher_name,
            'teacher_email': request.body.teacher_email,
            'teacher_subject': request.body.teacher_subject,
            'teacher_wing': request.body.teacher_wing,
            'teacher_image': request.file.filename
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

// View API for Faculty
exports.filterFaculty = async (request, response) => {
    let facultyData = await faculty.find({
        "$or": [
            {
                "teacher_name": { $regex: request.params.filter },
                "teacher_wing": { $regex: request.params.filter }
            }
        ]
    });

    if (facultyData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': facultyData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': facultyData
        };
    }

    response.send(arr);
};

// View API for Faculty
exports.viewFaculty = async (request, response) => {
    const facultyData = await faculty.find();

    if (facultyData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': facultyData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': facultyData
        };
    }

    response.send(arr);
};

// Update API for Faculty
exports.updateFaculty = async (request, response) => {
    upload.single('teacher_image')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `teacher_image` field with its path
            if (request.file) {
                updateData.teacher_image = request.file.filename;
            }

            const result = await faculty.findOneAndUpdate(
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

// Delete API for Faculty
exports.deleteFaculty = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await faculty.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
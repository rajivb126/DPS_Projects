const alumniForm = require('../models/alumniForm');
const mongodb = require('mongodb');
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

const upload = multer({ storage: storage });

// Add API for Alumni Form
exports.addAlumniForm = async (request, response) => {
    upload.single('photo')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }
        let data = alumniForm({
            'sname': request.body.sname,
            'fname': request.body.fname,
            'yearofpassout': request.body.yearofpassout,
            'nyearschool': request.body.nyearschool,
            'address': request.body.address,
            'contact': request.body.contact,
            'aemail': request.body.aemail,
            'presentpos': request.body.presentpos,
            'refteachers': request.body.refteachers,
            'photo': request.file.filename
        });

        const insertData = await data.save();

        var arr = {
            'status': true,
            'message': 'Record Insert Successfully!!',
            'data': insertData
        };

        response.send(arr);
    })
};

// View API for Alumni Form
exports.viewAlumniForm = async (request, response) => {
    const viewData = await alumniForm.find();

    if (viewData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': viewData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': 'No Record found!!',
            'data': viewData
        };
    }

    response.send(arr);
};

// Filter/Find APi for Alumni Form 
exports.filterAlumniForm = async (request, response) => {
    let filterData = await alumniForm.find({
        "$or": [
            { "sname": { $regex: request.params.filter } },
            { "fname": { $regex: request.params.filter } }
        ]
    });

    if (filterData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': filterData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': filterData
        };
    }

    response.send(arr);
};

// Update API for Alumni Form
exports.updateAlumniForm = async (request, response) => {
    let data = {
        'sname': request.body.sname,
        'fname': request.body.fname,
        'yearofpassout': request.body.yearofpassout,
        'nyearschool': request.body.nyearschool,
        'address': request.body.address,
        'contact': request.body.contact,
        'aemail': request.body.aemail,
        'presentpos': request.body.presentpos,
        'refteachers': request.body.refteachers,
        'refprincipal': request.body.refprincipal,
        'photo': request.body.photo
    };

    const updateData = await alumniForm.updateOne({ '_id': new mongodb.ObjectId(request.params.id) }, { $set: data });

    var arr = {
        'status': true,
        'message': 'Record Update Successfully'
    };

    response.send(arr);
};

// Delete API for Alumni Form
exports.deleteAlumniForm = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await alumniForm.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};
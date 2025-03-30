const enquiry = require('../models/enquiry');
const mongodb = require('mongodb');
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

// Add API for Enquiry Form
exports.addEnquiry = async (request, response) => {
    upload.single('efile')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let data = new enquiry({
            'ename': request.body.ename,
            'email': request.body.email,
            'emobile': request.body.emobile,
            'ecomment': request.body.ecomment,
            'efile': request.file.filename  
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

// Delete API for Enquiry Form
exports.deleteEnquiry = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await enquiry.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};

// Filter API for Enquiry Form
exports.filterEnquiry = async (request, response) => {
    let enquiryData = await enquiry.find({
        "$or": [
            { "ename": { $regex: request.params.filter } },
            { "email": { $regex: request.params.filter } },
            { "emobile": { $regex: request.params.filter } }
        ]
    });

    if (enquiryData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully!!",
            'data': enquiryData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Data Found!!",
            'data': enquiryData
        };
    }

    response.send(arr);
};

// View API for Enquiry Data
exports.viewEnquiry = async (request, response) => {
    let enquiryData = await enquiry.find();

    if (enquiryData.length != 0) {
        var arr = {
            'status': true,
            'message': 'Record Found Successfully',
            'data': enquiryData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found",
            'data': enquiryData
        };
    }

    response.send(arr);
};

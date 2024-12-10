const tc = require('../models/tc');
const mongodb = require('mongodb')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueFileName = (new Date().getTime())
        cb(null, uniqueFileName + file.originalname)
    }
})

const upload = multer({ storage: storage })


// Add API for TC
exports.addTransferCertificate = async (request, response) => {
    upload.single('tc_image')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let data = tc({
            'tc_sname': request.body.tc_sname,
            'tc_number': request.body.tc_number,
            'tc_image': request.file.filename
        });

        try {
            const insertData = await data.save();
            var arr = {
                'status': true,
                'message': 'Record Insert Successfully!!',
                'data': insertData
            };
            response.send(arr);
        } catch (err) {
            response.status(500).json({ message: err.message });
        }
    });
};


// View API for TC
exports.viewTransferCertificate = async (request, response) => {
    const viewData = await tc.find();

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

// filter API for TC
exports.filterTransferCertificate = async (request, response) => {
    const filter = Number(request.params.filter);

    try {
        const tcData = await tc.find({ tc_number: filter });

        if (tcData.length) {
            var arr = {
                'status': true,
                'message': "Record Found Successfully",
                'data': tcData
            };
        } else {
            var arr = {
                'status': false,
                'message': "No Record Found!",
                'data': tcData
            };
        }

        response.send(arr);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
};

// Update API for Transfer Certifictaes
exports.updateTransferCertificate = async (request, response) => {
    upload.single('tc_image')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body }; // Get the updated fields from the body

            // If a file was uploaded, update the `tc_image` field with its path
            if (request.file) {
                updateData.tc_image = request.file.filename;
            }

            const result = await tc.findOneAndUpdate(
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


//Delete API For Transfer Certifictaes
exports.deleteTransferCertificate = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await tc.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};

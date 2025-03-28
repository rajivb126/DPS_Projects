const Popup = require('../models/popup');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueFileName = new Date().getTime();
        cb(null, uniqueFileName + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Add API for Popup
exports.addPopup = async (request, response) => {
    upload.single('popup_image')(request, response, async function (err) {
        if (err) {
            return response.status(400).json({ message: err.message });
        }

        let startDate = request.body.start_date ? new Date(request.body.start_date) : new Date();
        let endDate = request.body.end_date ? new Date(request.body.end_date) : new Date(startDate.setMonth(startDate.getMonth() + 1));

        let data = new Popup({
            popup_header: request.body.popup_header,
            popup_image: request.file.filename,
            popup_link: request.body.popup_link,
            start_date: startDate,
            end_date: endDate,
            isVisible: request.body.isVisible || false  // Set default to false if not provided
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

// View API for Popup
exports.viewPopup = async (request, response) => {
    try {
        const popupData = await Popup.find();
        response.send({
            status: popupData.length !== 0,
            message: popupData.length ? "Record Found Successfully" : "No Record Found!",
            data: popupData
        });
    } catch (error) {
        response.status(500).json({ message: 'Server error', error });
    }
};

// Update API For Popup
exports.updatePopup = async (request, response) => {
    upload.single('popup_image')(request, response, async function (err) {
        if (err) {
            return response.status(500).send({ message: 'File upload error', err });
        }

        try {
            const { id } = request.params;
            const updateData = { ...request.body };

            if (request.file) {
                updateData.popup_image = request.file.filename;
            }

            const result = await Popup.findOneAndUpdate(
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

// Toggle Popup Visibility API (ON/OFF)
exports.togglePopupVisibility = async (request, response) => {
    try {
        const { id } = request.params;
        const popup = await Popup.findById(id);

        if (!popup) {
            return response.status(404).json({ message: 'Popup not found!' });
        }

        popup.isVisible = !popup.isVisible;  // Toggle ON/OFF
        await popup.save();

        response.status(200).send({
            status: true,
            message: `Popup visibility updated to ${popup.isVisible ? "ON" : "OFF"}`,
            data: popup
        });
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};

// Delete API For Popup
exports.deletePopup = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Popup.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            response.status(200).send({ message: 'Record deleted successfully' });
        } else {
            response.status(404).send({ message: 'Record not found' });
        }
    } catch (error) {
        response.status(500).send({ message: 'Server error', error });
    }
};

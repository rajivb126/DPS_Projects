module.exports = (app) => {
    const PopupController = require('../controllers/popup.controller');
    const router = require('express').Router();

    router.get('/view', PopupController.viewPopup);  // View all popups
    router.post('/add', PopupController.addPopup);   // Add new popup
    router.put('/update/:id', PopupController.updatePopup); // Update popup details
    router.put('/toggle/:id', PopupController.togglePopupVisibility); // Toggle ON/OFF
    router.delete('/delete/:id', PopupController.deletePopup); // Delete popup

    app.use('/api/popup', router);
};
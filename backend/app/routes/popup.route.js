module.exports = (app) => {
    const PopupController = require('../controllers/popup.controller');
    const router = require('express').Router();

    router.get('/view', PopupController.viewPopup);
    router.post('/add', PopupController.addPopup);
    router.put('/update/:id', PopupController.updatePopup);
    router.delete('/delete/:id', PopupController.deletePopup);

    app.use('/api/popup', router);
}
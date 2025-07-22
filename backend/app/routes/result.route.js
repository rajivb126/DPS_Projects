module.exports = (app) => {
    const ResultController = require('../controllers/result.controller');
    const router = require('express').Router();

    router.get('/view', ResultController.viewResult);  // View all popups
    router.post('/add', ResultController.addResult);   // Add new popup
    router.put('/update/:id', ResultController.updateResult); // Update popup details
    router.delete('/delete/:id', ResultController.deleteResult); // Delete popup

    app.use('/api/result', router);
};
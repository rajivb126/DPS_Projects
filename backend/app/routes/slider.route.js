module.exports = (app) => {
    const SliderController = require('../controllers/slider.controller');
    const router = require('express').Router();

    router.get('/view', SliderController.viewSlider);  // View all popups
    router.post('/add', SliderController.addSlider);   // Add new popup
    router.put('/update/:id', SliderController.updateSlider); // Update popup details
    router.delete('/delete/:id', SliderController.deleteSlider); // Delete popup

    app.use('/api/slider', router);
};
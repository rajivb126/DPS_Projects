module.exports = (app) => {
    var enquiryData = require('../controllers/enquiry.controller');
    var router = require('express').Router();

    // const validateRequest = require('../middlewares/validateRequest');
    // const enquiryvalidation = require('../middlewares/validation/enquiryValidation');

     router.post('/add', enquiryData.addEnquiry);
     router.get('/filter/:filter', enquiryData.filterEnquiry);
     router.get('/view', enquiryData.viewEnquiry);
     router.delete('/delete/:id', enquiryData.deleteEnquiry);

     app.use('/api/enquiry', router)
}
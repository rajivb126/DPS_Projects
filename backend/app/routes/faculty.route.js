module.exports = (app) => {
    const facultyController = require('../controllers/faculty.controller');
    const router = require('express').Router();

    router.post('/add', facultyController.addFaculty);
    router.get('/view', facultyController.viewFaculty);
    router.get('/filter/:filter', facultyController.filterFaculty);
    router.put('/update/:id', facultyController.updateFaculty);
    router.delete('/delete/:id', facultyController.deleteFaculty);

    app.use('/api/faculty', router);
}
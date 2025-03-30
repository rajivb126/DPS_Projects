module.exports = (app) => {
    const studentImage = require('../controllers/studentCouncilImage.controller');
    const router = require('express').Router();

    router.get('/view', studentImage.viewStudentImage);
    router.post('/add', studentImage.addStudentImage);
    router.put('/update/:id', studentImage.updateStudentImage);
    router.delete('/delete/:id', studentImage.deleteStudentImage);

    app.use('/api/studentimage', router);
}
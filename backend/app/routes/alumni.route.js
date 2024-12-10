module.exports = (app) => {
    const alumniForm = require('../controllers/alumni.controller');
    const router = require('express').Router()

    router.post('/add', alumniForm.addAlumniForm);
    router.get('/view', alumniForm.viewAlumniForm);
    router.get('/filter/:filter', alumniForm.filterAlumniForm);
    router.put('/update/:id', alumniForm.updateAlumniForm);
    router.delete('/delete/:id', alumniForm.deleteAlumniForm);

    app.use('/api/alumniform', router);
}
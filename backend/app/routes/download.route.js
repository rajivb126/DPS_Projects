module.exports = (app) => {
    const download = require('../controllers/download.controller');
    const router = require('express').Router();

    router.get('/view', download.viewDownload);
    router.post('/add', download.addDownload);
    router.put('/update/:id', download.updateDownload);
    router.delete('/delete/:id', download.deleteDownload);

    app.use('/api/download', router);
}
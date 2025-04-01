module.exports = (app) => {
    const websiteFile = require('../controllers/websiteFile.controller');
    const router = require('express').Router();

    router.get('/view', websiteFile.viewWebsiteFile);
    router.post('/add', websiteFile.addWebsiteFile);
    router.put('/update/:id', websiteFile.updateWebsiteFile);
    router.delete('/delete/:id', websiteFile.deleteWebsiteFile);

    app.use('/api/website-file', router);
}
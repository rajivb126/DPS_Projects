module.exports = (app) => {
    const siteImage = require('../controllers/siteImage.controller');
    const router = require('express').Router();

    router.get('/view', siteImage.viewSiteImage);
    router.post('/add', siteImage.addSiteImage);
    router.put('/update/:id', siteImage.updateSiteImage);
    router.delete('/delete/:id', siteImage.deleteSiteImage);


    app.use('/api/site-image', router);
}
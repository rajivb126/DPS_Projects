module.exports = (app) => {
    const schoolnews = require('../controllers/schoolNews.controller');
    const router = require('express').Router();

    router.get('/view', schoolnews.viewSchoolnews);
    router.post('/add', schoolnews.addSchoolnews);
    router.put('/update/:id', schoolnews.updateSchoolnews);
    router.delete('/delete/:id', schoolnews.deleteSchoolnews);

    app.use('/api/schoolnews', router);
}
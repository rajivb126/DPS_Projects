module.exports = (app) => {
    const newsUpdate = require('../controllers/newsUpdate.controller');
    const router = require('express').Router();

    router.get('/view', newsUpdate.viewNews);
    router.post('/add', newsUpdate.addNews);
    router.get('/filter/:filter', newsUpdate.filterNews);
    router.put('/update/:id', newsUpdate.updateNews);
    router.delete('/delete/:id', newsUpdate.deleteNews);

    app.use('/api/news', router);
}
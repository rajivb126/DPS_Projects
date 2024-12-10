module.exports = (app) => {
    const newsletter = require('../controllers/newsletter.controller');
    const router = require('express').Router();

    router.get('/view', newsletter.viewNewsletter);
    router.post('/add', newsletter.addNewsletter);
    router.get('/dashboard-stats-newsletter', newsletter.getDashboardStatsNewsletter);
    router.put('/update/:id', newsletter.updateNewsletter);
    router.delete('/delete/:id', newsletter.deleteNewsletter);

    app.use('/api/newsletter', router);
}
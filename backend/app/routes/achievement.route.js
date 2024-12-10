module.exports = (app) => {
    const achievementController = require('../controllers/achievement.controller');
    const router = require('express').Router();

    router.get('/view', achievementController.viewAchievement);
    router.post('/add', achievementController.addAchievement);
    router.put('/update/:id', achievementController.updateAchievement);
    router.delete('/delete/:id', achievementController.deleteAchievement);

    app.use('/api/achievement', router);
}
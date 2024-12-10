module.exports = (app) => {
    const infrastructureController = require('../controllers/infrastructure.controller');
    const router = require('express').Router();

    router.get('/view', infrastructureController.viewInfrastructure);
    router.post('/add', infrastructureController.addInfrastructure);
    router.put('/update/:id', infrastructureController.updateInfrastructure);
    router.delete('/delete/:id', infrastructureController.deleteInfrastructure);
    router.delete('/deleteImage/:imageName', infrastructureController.deleteImage);

    app.use('/api/infrastructure', router);
}
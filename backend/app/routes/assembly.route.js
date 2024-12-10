module.exports = (app) => {
    const assemblyController = require('../controllers/assembly.controller');
    const router = require('express').Router();

    // Add event route
    router.post('/add', assemblyController.addAssembly);

    // View a single event by slug
    router.get('/view/:slug', assemblyController.viewAssembly);

    // View all events
    router.get('/view', assemblyController.viewAllAssembly);

    // New Dashboard Stats Route
    router.get('/dashboard-stats-assembly', assemblyController.getDashboardStatsAssembly);

    // Update event by ID
    router.put('/update/:id', assemblyController.updateAssembly);

    // Delete a specific event by ID
    router.delete('/delete/:id', assemblyController.deleteAllAssembly);

    // Delete image by image name
    router.delete('/deleteImage/:imageName', assemblyController.deleteImage);  // New route for image deletion

    // Use the /api/events base path
    app.use('/api/assembly', router);
}

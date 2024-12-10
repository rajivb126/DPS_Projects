module.exports = (app) => {
    const eventController = require('../controllers/events.controller');
    const router = require('express').Router();

    // Add event route
    router.post('/add', eventController.addEvent);

    // View a single event by slug
    router.get('/view/:slug', eventController.viewEvent);

    // View all events
    router.get('/view', eventController.viewAllEvent);

    // New Dashboard Stats Route
    router.get('/dashboard-stats', eventController.getDashboardStats);

    // Update event by ID
    router.put('/update/:id', eventController.updateEvent);

    // Delete a specific event by ID
    router.delete('/delete/:id', eventController.deleteAllEvent);
// Delete image by image name
    router.delete('/deleteImage/:imageName', eventController.deleteImage);  // New route for image deletion
    

    // Use the /api/events base path
    app.use('/api/events', router);
}

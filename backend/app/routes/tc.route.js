module.exports = (app) => {
    const transfercertificate = require('../controllers/tc.controller');
    const router = require('express').Router()

    router.post('/add', transfercertificate.addTransferCertificate);
    router.get('/view', transfercertificate.viewTransferCertificate);
    router.get('/filter/:filter', transfercertificate.filterTransferCertificate);
    router.put('/update/:id', transfercertificate.updateTransferCertificate)
    router.delete('/delete/:id', transfercertificate.deleteTransferCertificate);

    app.use('/api/transferCertificate', router);
}   
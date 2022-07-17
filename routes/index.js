const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const ui = require('../public');

router.use('/api', apiRoutes);

router.use('/', ui);

module.exports = router;
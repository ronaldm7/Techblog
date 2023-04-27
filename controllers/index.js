const router = require('express').Router();

const apiRoutes = require('./api/');
const trafficRoutes = require('./traffic.js');
const wallRoutes = require('./wall.js');

router.use('/', trafficRoutes);
router.use('/wall', wallRoutes);
router.use('/api', apiRoutes);

module.exports = router;


const router = require('express').Router();

const uRoute = require('./user.js');
const pRoute = require('./post');
const cRoutes = require('./comment-rt.js');

router.use('/user', uRoute);
router.use('/post', pRoute);
router.use('/comment', cRoutes);

module.exports = router;
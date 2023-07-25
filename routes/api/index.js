const router = require('express').Router();
// other api routes for users, reactions, and thoughts 
const userRoute = require('./userRoute');

router.use('/users', userRoute);

module.exports = router;

const router = require('express').Router();
// other api routes for users, reactions, and thoughts 
const userRoute = require('./userRoute');
const thoughtRoute = require('./thoughtRoute');


router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);



module.exports = router;

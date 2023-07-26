const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    addFriendToUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser);

router.route('/:userId/friends/:friendsId').post(addFriendToUser);

module.exports = router;

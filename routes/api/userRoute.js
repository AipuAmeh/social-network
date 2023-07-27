const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    addFriendToUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

router.route('/:userId')
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendsId').post(addFriendToUser);

module.exports = router;

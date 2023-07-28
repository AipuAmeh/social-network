const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  addFriendToUser,
  updateUser,
  deleteUser,
  deleteFriendFromUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendsId")
  .post(addFriendToUser)
  .delete(deleteFriendFromUser);

module.exports = router;

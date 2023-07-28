const { User, Thought, Reaction } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      if (!user) {
        return res.json({ message: "Unable to find that user" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      if (!user) {
        return res.json({ message: "Could not create user" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async addFriendToUser(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendsId } },
        { runValidators: true, new: true }
      );
      if (!friend) {
        return res.json({ message: "Unable to add friend" });
      }
      res.json(friend);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { username: req.body.username },
        { email: req.body.email },
        { new: true }
      );
      if (!user) {
        return res.json({ message: "Unable to update user" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID!" });
      }
      res.json({ message: "Successfully deleted user" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteFriendFromUser(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendsId } },
        { new: true }
      );
      if (!friend) {
        return res.status(404).json({ message: "No friend with that ID!" });
      }
      res.json({ message: "Successfully deleted friend" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

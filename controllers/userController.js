const { User, Thought, Reaction } = require('../models');

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
            const user = await User.findOne({ _id: req.params.userId })
            if (!user) {
                return res.json({ message: 'Unable to find that user' });
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
                return res.json({ message: 'Could not create user' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async addFriendToUser(req, res) {
        try {
            const friend = await User.findOneAndUpdate({
                _id: req.params.userId,
                friends: req.params.friendsId,
            });
            if (!friend) {
                return res.json({ message: 'Unable to add friend' });
            }
            res.json(friend);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
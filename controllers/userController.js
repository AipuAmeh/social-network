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
    }
};
const { User, Thought, Reaction } = require('../models');

module.exports = {
    async getUser(req, res){
        try {
            const user = User.find({});
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getOneUser(req, res) {
        try {
            const user = User.findOne({ _id: req.params.userId })
            if (!user) {
                return res.json({ message: 'Unable to find that user' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
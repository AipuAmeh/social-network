const { User, Thought, Reaction } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId })
            if (!thought) {
                return res.json({ message: 'Unable to find those thoughts' });
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
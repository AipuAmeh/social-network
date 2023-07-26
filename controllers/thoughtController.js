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
    },

    // push created thought to associated users array
    async createThoughts(req, res) {
        try {
            const thought = await Thought.create({ 
                thoughtText: req.body.thoughtText,
                username: req.body.username,
                userId: req.body.userId,     
            });
            if (!thought) {
                return res.json({ message: 'Could not create thought' });
            }
            res.json(thought);

        } catch (error) {
            res.status(500).json(error);
        }
    }
};
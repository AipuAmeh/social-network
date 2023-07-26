const { User, Thought, Reaction } = require('../models');

module.exports = {
    async createReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate({
                reactions: req.body.reactionId
            })
            if (!newReaction) {
                return res.json({ message: 'Cannot add new reaction'});
            }
            res.json(newReaction);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
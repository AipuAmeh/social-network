const { User, Thought, Reaction } = require("../models");

module.exports = {
  async createReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!newReaction) {
        return res.json({ message: "Cannot add new reaction" });
      }
      res.json(newReaction);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteReaction(req, res) {
    console.log(req.params.reactionId);
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      if (!reaction) {
        return res.status(404).json({ message: "No reaction with that ID!" });
      }
      res.json({ message: "Successfully deleted reaction", thought: reaction });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

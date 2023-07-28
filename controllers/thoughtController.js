const { User, Thought, Reaction } = require("../models");

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
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        return res.json({ message: "Unable to find those thoughts" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createThoughts(req, res) {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
      });
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      if (!thought) {
        return res.json({ message: "Could not create thought" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateThoughts(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { thoughtText: req.body.thoughtText },
        { new: true }
      );
      if (!thought) {
        return res.json({ message: "Unable to update thought" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteThoughts(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        return res.status(404).json({ message: "No thoughts with that ID!" });
      }
      res.json({ message: "Successfully deleted thought" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

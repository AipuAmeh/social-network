const { Schema, model } = require('mongoose');
const Reaction = require("./Reaction");
const formatDate = require('../utils/formatDate');

const thoughtSchema = Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: [280, "Too many thoughts!"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


const Thought = model("thought", thoughtSchema);

module.exports = Thought;

const mongoose = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = mongoose.Schema(
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
      // getter method to format time stamp
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
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// thoughtSchema
// .get(function (date) {
//     const formattedDate = `${new Date(date).getMonth() +1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
//     return this.createdAt.
// })
const Thought = mongoose.model("thought", thoughtSchema);

module.exports = Thought;

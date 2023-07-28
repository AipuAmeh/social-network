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
    id: false
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

// thought seeds
Thought.find({})
.then( async collection => {
  if (collection.length === 0) {
    const results = await Thought.insertMany([
      {
        thoughtText: 'Finally saw Barbie, it was amazing!',
        username: 'Catilin',

      },
      {
        thoughtText: 'Lauryn Hill was def ahead of her time',
        username: 'Stacy',
      },
      {
        thoughtText: 'Who is going to see Oppenheimer though?',
        username: 'Chad'
      }
    ]);
    return console.log('Thoughts inserted', results);
  }
  return console.log('Thoughts already populated');
})
.catch(err => console.log(err));

module.exports = Thought;

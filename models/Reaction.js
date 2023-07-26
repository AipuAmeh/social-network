const { Schema, model } = require('mongoose');
const formatDate = require("../utils/formatDate");

const reactionSchema = Schema(
  {
    reactionId: { _id: Number },
    reactionBody: {
      type: String,
      required: true,
      max: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;

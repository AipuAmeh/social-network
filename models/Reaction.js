const mongoose = require('mongoose');

const reactionSchema = mongoose.Schema({
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
        // getter method to format date
    }
});

module.exports = reactionSchema;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (email) {
        const emailValidate = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return emailValidate.test(email);
      },
    },
  },
  thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'thought'
    }
  ],
  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
  ]
},
{
  toJSON: {
    virtuals: true,
  }
});

userSchema
.virtual('friendsCount')
.get(function () {
    return this.friends.length;
});

const User = mongoose.model('user', userSchema);

module.exports = User;


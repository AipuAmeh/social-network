const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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

const User = model('user', userSchema);

User.find({})
.then( async collection => {
  if (collection.length === 0) {
    const results = await User.insertMany([
      {
        username: 'Jessica Biel',
        email: 'jessicabiel@hotmail.com'
    },
    {
        username: 'Lauren London',
        email: 'laurenlondon928@gmail.com'
    },
    {
        username: 'Paul Walker',
        email: 'paulwalker@yahoo.com'
    }
    ]);
    return console.log('Users inserted', results);
  }
  return console.log('Users already populated');
})
.catch(err => console.log(err));


module.exports = User;


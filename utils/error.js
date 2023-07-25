// const mongoose = require('mongoose');
// const { Reaction, Thought, User } = require('../models');
// const { userSeeds, thoughtSeeds } = require('./data');

console.time('seeding');
connection.once('open', async(req,res) => {
    let  users = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userData.length) {
        await connection.dropCollection('users');
    }

    let thoughtSeeds = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtdata.length) {
        await connection.dropCollection('thoughts');
    }

    const usersData = [];
    const thoughtsData = [];

    await User.collection.insertMany(usersData);

    await Thought.collection.insertMany(thoughtsData);

    console.table(users);
    console.table(thoughts);
});




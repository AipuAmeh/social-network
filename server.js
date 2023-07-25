const express = require('express');
const db = require('./config/connection');
const { MongoClient } = require('mongodb');
const User = require('./models/User');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// const client = 'mongodb://localhost:27017';

// let db;

// const dbName = 'socialNetworkDB';

// async function startServer() {
//     try {
//         await client.connect();
//         console.log('Me and MongoDB are connected');
//         db = client.db(dbName);
//     } catch (error) {
        
//     }
// }

// startServer();



db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API now listening on port ${PORT}!`);
    });
});

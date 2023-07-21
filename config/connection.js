const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/socialNetworkAPI');

module.exports = connection;
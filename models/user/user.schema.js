const mongoose = require("mongoose");

module.exports = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    passwords: Map,
    locations: Map
}, {collection: 'user'});
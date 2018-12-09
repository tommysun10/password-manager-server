const mongoose = require("mongoose");

// Enforces a schema on Mongodb
// Prevents random errors
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
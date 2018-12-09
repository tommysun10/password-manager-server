const mongoose = require('mongoose');
const userSchema = require('./user.schema');

// links the model to the schema
const userModel = mongoose.model('UserModel', userSchema);

// Creates a user
createUser = (user) => {
    return userModel.create(user)
}

// Finds a user
findUserByUsername = (username) => {
    return userModel.findOne({username: username})
}

// Logs in a user
findUserByCredentials = (username, password) => {
    return userModel.findOne({username: username, password: password})
}

// Updates the user
updateUser = (userId, newUser) => {
    return userModel.findOneAndUpdate({_id: userId}, {$set: newUser}, {setDefaultsOnInsert: true, new: true})
}

module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials,
    updateUser
};
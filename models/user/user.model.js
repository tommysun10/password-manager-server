const mongoose = require('mongoose');
const userSchema = require('./user.schema');

const userModel = mongoose.model('UserModel', userSchema);

createUser = (user) => {
    return userModel.create(user)
}

findUserByUsername = (username) => {
    return userModel.findOne({username: username})
}

findUserByCredentials = (username, password) => {
    return userModel.findOne({username: username, password: password})
}

updateUser = (userId, newUser) => {
    return userModel.update({_id: userId}, {$set: newUser})
}

module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials,
    updateUser
};
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

module.exports = {
    createUser,
    findUserByUsername,
    findUserByCredentials
};
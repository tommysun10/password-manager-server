const userModel = require('../models/user/user.model.server');

modulee.exports = app => {

    createUser = (req, res) => {
        const newUser = req.body;

        userModel.createUser(newUser)
            .then(user => {
                req.session['currentUser'] = user;
                res.send(user);
            })
    }

    findUserByCredentials = (req, res) => {
        const username = req.body.username
        const password = req.body.password

        userModel.findUserByCredentials(username, password)
            .then( user => {
                if (user) {
                    req.session['currentUser'] = user;
                    res.send(req.session['currentUser']);
                } else {
                    res.sendStatus(422);
                }
            })
    }

    findUserByUsername = (req, res) => {
        const username = req.body.username

        userModel.findUserByUsername(username)
            .then( user => {
                res.json(user)
            })
    }

    // Allow server to accept request / location / method
    app.post('/api/register', createUser);
    app.post('/api/user/credentials', findUserByCredentials);
    app.post('/api/user/username', findUserByUsername)
}
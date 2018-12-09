const userModel = require('../models/user/user.model');

module.exports = app => {

    // Gets the current user
    currentUser = (req, res) => {
        const cur = req.session['currentUser'];
        if (cur) {
            userModel.findUserByUsername(cur.username)
                .then(user => res.send(user))
        } else {
            res.sendStatus(422)
        }
    }

    // Creates a new user
    createUser = (req, res) => {
        const newUser = req.body;

        userModel.createUser(newUser)
            .then(user => {
                req.session['currentUser'] = user;
                res.send(user);
            })
    }

    // Used to log in a user
    findUserByCredentials = (req, res) => {
        const username = req.body.username
        const password = req.body.password

        userModel.findUserByCredentials(username, password)
            .then(user => {
                if (user) {
                    req.session['currentUser'] = user;
                    res.send(req.session['currentUser']);
                } else {
                    res.sendStatus(422);
                }
            })
    }

    // Find a user based on the username
    findUserByUsername = (req, res) => {
        const username = req.body.username

        userModel.findUserByUsername(username)
            .then(user => {
                if (user) {
                    res.sendStatus(422);
                } else {
                    res.json(user)
                }
            })
    }

    // Logs out a user
    logout = (req, res) => {
        req.session['currentUser'] = null;
        res.send(null);
      }

    // Gets the current User
    profile = (req, res) => {
        res.send(req.session['currentUser'])
    }

    // Updates the user
    updateUser = (req, res) => {
        const user = req.session['currentUser']
        const id = user._id

        userModel.updateUser(id, req.body)
            .then(user => {
                res.json(user);
            })
    }

    // Allow server to accept request / location / method
    app.post('/api/register', createUser);
    app.post('/api/login', findUserByCredentials);
    app.post('/api/user/username', findUserByUsername);
    app.post('/api/logout', logout);
    app.get('/api/currentUser', currentUser);
    app.get('/api/profile', profile);
    app.put('/api/user/update', updateUser);
}
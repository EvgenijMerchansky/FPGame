const User = require('../models/user');

exports.getAllUsers = (req, res) => {

    let users = User.find({}, (err, docs) => docs);

    users.then(data => res.send(data));
};
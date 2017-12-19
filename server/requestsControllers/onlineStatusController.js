const User = require('../models/user');

exports.enableOnline = (req, res) => {

    User.updateOne({email: req.body.email}, {online: true}, (err, doc) => {
        if (err) throw err;
    })
};

exports.disableOnline = (req, res) => {

    User.updateOne({email: req.body.email}, {online: false}, (err, doc) => {
        if (err) throw err;
    })
};

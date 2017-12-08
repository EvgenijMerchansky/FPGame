const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/index');
const port = 9000;
const path = require('path');
const sockets = require('./sockets/sockets');
const User = require('./models/user');


// connect to the database and load models
require('./models/index').connect(config.dbUri);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));
// app.use(express.static(path.resolve(__dirname, '..', 'client', 'style.css')));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/router');
// const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);

app.get('/users', (req, res) => {

    let users = User.find({}, (err, docs) => docs);

    users.then(data => res.send(data));
});
// app.use('/api', apiRoutes);

// start the server
let server = app.listen(port, () => {
  console.log('Server is running on http://localhost:9000 or http://127.0.0.1:9000');
});

sockets(server);

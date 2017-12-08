const express = require('express');

const routerSignupController = require('../routerControllers/routerSignupController');
const routerLoginController = require('../routerControllers/routerLoginController');
const apiDashboardController = require('../routerControllers/apiDashboardController');

const router = new express.Router();

router.post('/signup', routerSignupController);

router.post('/login', routerLoginController);

router.get('/dashboard', apiDashboardController);

module.exports = router;

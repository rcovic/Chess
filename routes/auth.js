'use strict';

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const tokenHandler = require('../controllers/tokenHandler');

router.use(tokenHandler.hasToken);

router.get('/', authController.auth);
router.post('/', authController.submitLogin);

router.get('/register', authController.register);
router.post('/register', authController.submitRegistration);

module.exports = router;

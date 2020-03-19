var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');


router.get('/', authController.auth);
router.post('/', authController.submitLogin);

router.get('/register', authController.register);
router.post('/register', authController.submitRegistration);

module.exports = router;

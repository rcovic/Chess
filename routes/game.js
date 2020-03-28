'use strict';

const express = require('express');
const router = express.Router();
const tokenHandler = require('../controllers/tokenHandler');
const gameController = require('../controllers/gameController');


router.use(tokenHandler.verifyToken);
router.use(tokenHandler.decodeToken);

router.get('/', gameController.index);

router.get('/match', gameController.match);
router.get('/match/search', gameController.searchGame);


module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const tokenHandler = require('../controllers/tokenHandler');
const gameController = require('../controllers/gameController');


router.use(tokenHandler.verifyToken);
router.use(tokenHandler.decodeToken);

router.get('/', gameController.index);

router.get('/matchmaking', gameController.matchmaking);
router.get('/matchmaking/start', gameController.startSearch);
router.get('/matchmaking/stop', gameController.stopSearch);


module.exports = router;
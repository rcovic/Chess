'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/game');
});

module.exports = router;

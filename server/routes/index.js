// index.js
const express = require('express');
const member = require('./user');

const router = express.Router();

router.use('/user', member);

module.exports = router;

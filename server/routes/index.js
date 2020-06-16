// index.js
const express   = require('express');
const auth      = require("./auth");
const member    = require('./user');
const login     = require('./login')


const router = express.Router();

// 사용자
router.use('/user', member);
// 인증
router.use('/auth', auth);
// 로그인 
router.use('/login', login);
// 로그아웃 
router.use('/logout', login);



module.exports = router;


// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();
const jwt = require('jsonwebtoken');

// 로그인을 수행한다.
router.post("/", (req, res) => {
  const {userid, password} = req.body;
  // db select문 수행
  db((err, connection) => {

    connection.query("SELECT USER_ID, NAME, PASSWORD FROM USER WHERE USER_ID=? AND PASSWORD = ?",[userid, base64.encode(password)], (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }
      
      // 사용자가 업을경우 상태 500 
      if(rows[0] === undefined){
        res.status(500)//
        return res.json({error : "사용자가 음슴"})
      }
      const userInfo = rows[0]||{};
      const tokken =   jwt.sign({userInfo}  ,"Apple", {expiresIn: '7d'});
      console.log(userInfo)
       return res.json({
        authrization : true
        , tokken     : tokken
        , userInfo : {
            userid : userInfo.USER_ID
            , name : userInfo.NAME
        }
      }); // 결과는 rows에 담아 전송
      // req.session.loginInfo= {
      //         authrization  : rows.length >0,
      //         userInfo
      // }
      // /// 로그인오류시
      // if(!req.session.loginInfo.authrization){
      //   res.status(500);
      // }
  
      //   req.session.save(function(){                              
      //       res.redirect('/');
      //    });
      //    console.log(req.session);
      //    console.log(req.sessionID);
         
    });
  });
});


module.exports = router;
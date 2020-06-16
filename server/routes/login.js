
// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();


// 로그인을 수행한다.
router.post("/", (req, res) => {
  const {userid, password} = req.body;
  // db select문 수행
  db((err, connection) => {

    connection.query("SELECT USER_ID, NAME FROM USER WHERE USER_ID=? AND PASSWORD = ?",[userid, base64.encode(password)], (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }

      const userInfo = rows[0]||{};

      req.session.loginInfo= {
              authrization  : rows.length >0,
              userInfo
      }
      /// 로그인오류시
      if(!req.session.loginInfo.authrization){
        res.status(500);
      }
  
        req.session.save(function(){                              
            //res.redirect('/');
         });
         console.log(req.session);

        return res.json(
           { data  :  req.session.loginInfo}
        ); // 결과는 rows에 담아 전송
    });
  });
});


module.exports = router;
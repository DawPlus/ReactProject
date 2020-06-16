
// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();

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

      if(rows.length >0){
        req.session.authrization =true;
        req.session.useInfo = {
                userInfo
        }
      }else{
        req.session.authrization =false;
      }

      var jsonData = {
          status : "200"
        , data   : {
            auth :  req.session.authrization,
            tokken :   Base64.encode(userid+":"+Base64.encode(password)),
            userInfo : userInfo
        }
      }
      console.log(jsonData);
      return res.json(jsonData); // 결과는 rows에 담아 전송
    });
  });
});

router.get("/check", (req, res) => {
  console.log("hello world")
});

module.exports = router;
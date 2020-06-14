
// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();

router.post("/", (req, res) => {
  const {userid, password} = req.body;
  console.log(userid, password);
  console.log(req.session)
  // db select문 수행
  db((err, connection) => {

    connection.query("SELECT USER_ID, NAME FROM USER WHERE USER_ID=? AND PASSWORD = ?",[userid, base64.encode(password)], (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }
      const userInfo = rows[0]||{};
      var jsonData = {
          status : "200"
        , data   : {
            auth :  rows.length > 0 ,
            userInfo : userInfo
        }
      }
      console.log(jsonData);
      return res.json(jsonData); // 결과는 rows에 담아 전송
    });
  });
});

module.exports = router;
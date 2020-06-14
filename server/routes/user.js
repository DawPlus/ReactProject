
// member.js
const express = require("express");
const db = require("../connect");

const router = express.Router();

router.post("/", (req, res) => {
  const {userId, password} = req.body;
console.log(res.status(200));



  // db select문 수행
  db((err, connection) => {


    connection.query("SELECT * FROM USER WHERE USER_ID=?",[userId], (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }
      console.log(rows)
      console.log(rows[0]);
      return res.json({ status : 200 , data: rows[0] }); // 결과는 rows에 담아 전송
    });
  });
});

module.exports = router;
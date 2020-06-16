
// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();


// 현재 세션을 반환한다. 
router.post("/getSession", (req, res) => {
  console.log(req.session)
  const jsonData = {
    data : req.session.loginInfo
}
  return res.json(jsonData);
});



// 토큰을 검증한다. (필요 없을듯)
router.post("/check", (req, res) => {
   const {tokken} = req.body;
   const info = base64.decode(tokken).split(":");
   db((err, connection) => {

    connection.query("SELECT USER_ID, NAME FROM USER WHERE USER_ID=? AND PASSWORD = ?",[info[0], info[1]], (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }
    
      const userInfo = rows[0]||{};
      if(JSON.stringify(userInfo) === "{}") return res.sendStatus(500);

      var jsonData = {
         data   : {
            auth :  rows.length > 0 ,
            tokken : tokken,
            userInfo : userInfo
        }
      }

      return res.json(jsonData); // 결과는 rows에 담아 전송
    });
  });



});


module.exports = router;
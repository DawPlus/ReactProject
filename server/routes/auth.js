
// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();
const jwt = require('jsonwebtoken');


// 토큰을 검증한다. 
router.post("/check", (req, res) => {
   const {tokken} = req.body;
   console.log(tokken);
   try {
      var decoded = jwt.verify(tokken, 'Apple');
    //  const {userid, }
    const {USER_ID, PASSWORD} = decoded.userInfo;
   
   db((err, connection) => {

    connection.query("SELECT USER_ID, NAME FROM USER WHERE USER_ID=? AND PASSWORD = ?",[USER_ID, PASSWORD], (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }
    
      const userInfo = rows[0]||{};
      if(JSON.stringify(userInfo) === "{}") return res.sendStatus(500);
    
      var jsonData = {
       authrization :  rows.length > 0 ,
            tokken : tokken,
            userInfo : {
              userid : userInfo.USER_ID
              , name : userInfo.NAME
          }
   
      }

      return res.json(jsonData); // 결과는 rows에 담아 전송
    });
  });

  
} catch(err) {
  // 뭔가 잘못됨 ? 
  console.log(err);
}

});


module.exports = router;
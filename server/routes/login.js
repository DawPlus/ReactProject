
// member.js
const express = require("express");
const db = require("../connect");
const base64 =  require("js-base64").Base64;
const router = express.Router();
const getTokken = require("../config").getTokken;







// 로그인을 수행한다.
router.post("/", (req, res) => {
  // Param
  const {userid, password} = req.body;
  // Query 
  const login = "SELECT USER_ID, NAME, PASSWORD FROM USER WHERE USER_ID=? AND PASSWORD = ?";
  db( (connection) => {

      connection.query(login, [userid, base64.encode(password)], (err, rows) => {

        connection.release(); // 연결세션 반환.
        if (err) {
          res.status(500);
          return res.json({error :err }) ;
        }

        if(rows[0] === undefined){
          res.status(500)//
          return res.json({error : "사용자가 음슴"})
        }

        const userInfo  = rows[0]||{}; 
        const tokken    =  getTokken(userInfo);
        const jsonData  = {
              authrization : true
              , tokken     : tokken
              , userInfo : {
                  userid : userInfo.USER_ID
                  , name : userInfo.NAME
              }
          };

       return res.json(jsonData); 
    });
  });
});


module.exports = router;
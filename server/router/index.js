const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 커넥션 연결
let cn = mysql.createConnection({
    host : "db.dawplus.gabia.io",
    port : 3306,
    user: "dawplus",
    password: "admin123!@#",
    database: "dbdawplus"
  })


  cn.connect();



router.get('/', (req, res)=>

cn.query("SELECT * FROM TEST_TABLE",

 (e, r ,fields)=>{
      if(e){
          res.send("err"+e)
      }else{
          console.log(r)
          res.json(r);
      }

 }
));

module.exports = router;
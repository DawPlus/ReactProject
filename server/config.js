const jwt = require('jsonwebtoken');

const db_config = {
  host : "211.47.75.102",
  port : 3306,
  user: "dawplus",
  password: "admin1234!@",
  database: "dbdawplus"
};
const secret  ="avocadoWebSite";
const getTokken = (userInfo)  =>  jwt.sign({userInfo}  ,secret, {expiresIn: '7d'});
const isTokken  = (tokken)    =>  jwt.verify(tokken, secret);

module.exports.db_config = db_config;
module.exports.secret = secret;
module.exports.getTokken = getTokken;
module.exports.isTokken = isTokken;

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const route = require('./routes');
const session = require('express-session');
var parseurl = require('parseurl');
var MySQLStore = require('express-mysql-session')(session);   
const config = require("./config");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var sessionStore = new MySQLStore(config);  
app.use(session({
    secret: 'sercretAdminTest',
   
    resave: false,
    saveUninitialized: true,
    store: sessionStore        
    
    // cookie: { maxAge: 60 * 60 * 1000 }  // 1시간 유지 
}))
  
    
  app.use('/api', route);



app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
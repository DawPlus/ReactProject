
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const route = require('./routes');
const session = require('express-session');
var parseurl = require('parseurl');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
    secret: 'sercretAdminTest',
    resave: false,
    saveUninitialized: true
  }))
  
  app.use(function (req, res, next) {
    if (!req.session.views) {
      req.session.views = {}
    }
  
    // get the url pathname
    var pathname = parseurl(req).pathname
  
    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  
    next()
  })
    
    app.use('/api', route);

  app.get('/foo', function (req, res, next) {
      console.log(req.session)
    res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
  })



app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
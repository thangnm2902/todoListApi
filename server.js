var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  User = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  
 
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb'); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

var userroutes = require('./api/routes/userRoute'); //importing route
userroutes(app); //register the route

const proxy = require('http-proxy-middleware');

/* app.use(
  '/api',
  proxy({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
); */

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


console.log('todo list RESTful API server started on: ' + port);
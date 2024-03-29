var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');


var session = require('express-session');
var flash = require('connect-flash');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbproducts', { useMongoClient: true });
require("./models/Product");

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
})
var upload = multer({
  storage:storage,
}).single('CSVfile');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('./public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
 app.use(flash());


app.use('/', index);
app.use('/users', users);
app.post('/upload',(req,res,next)=>
{ upload(req,res,(error)=>{
    if(error){
        res.render('index',{
            message:error
        })
    }else{
        res.render('index',{
            message:"Successfully uploaded",
            filename:`files/${req.file.filename}`
        })
    }
})

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

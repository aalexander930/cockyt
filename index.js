const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// const favicon = require('serve-favicon');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const indexRouter = require('./routes/index');


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-2ihyx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, ()=> {
  console.log('connected...');
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', indexRouter);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//render html files
// if using ejs app.engine('html', require('ejs').renderFile);


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './views', 'index.html'))
// });

// app.get('/', (req, res) => {
//   res.render('index.html', { message: 'Hello World using ejs!' });
// })

// catch 404 and forward to error handler 
app.use((req, res, next) => {
  next(new createError.NotFound());
});

//error handler 
app.use((err, req, res, next) => {
  //render the error page 
  res.status(err.status || 500);
  // res.render('error.html', {err});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
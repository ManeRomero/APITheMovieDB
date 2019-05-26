var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs')

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/pelicula');
app.use('/', indexRouter);
app.use('/pelicula', usersRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(app.get('views'), 'partials'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
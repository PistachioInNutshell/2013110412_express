var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
var staffRouter = require('./routes/staff');

var app = express();

mongoose.connect('mongodb+srv://superdev:nan1460za555@2013110412-nun.jdwj8h4.mongodb.net/restfulapi?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter)
app.use('/staff', staffRouter);

module.exports = app;

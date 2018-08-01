const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose.connect('mongodb://user:password@host:port/dbname');
mongoose.connect('mongodb://localhost:27017/node-mongoose', { useNewUrlParser: true });

require('./src/index')(app);

app.listen(3000, () => {
    console.log('Express started');
});
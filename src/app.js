'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//load routes
const index = require('./routes/index-routes');
const spells = require('./routes/spell-routes');

app.use(bodyParser.json());

app.use('/', index);
app.use('/spells', spells);

module.exports = app;
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Database Connection
mongoose.connect('mongodb://dnd5eapi:dnd5eapi@ds054288.mlab.com:54288/dnd5enode', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

//Models
const Spell = require('./models/spell-model');

//Routes
const index = require('./routes/index-routes');
const spells = require('./routes/spell-routes');

app.use(bodyParser.json());

app.use('/', index);
app.use('/spells', spells);

module.exports = app;
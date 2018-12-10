'use strict'

const express = require('express');
const controller =require('../controlers/spell-controller');
const router = express.Router();

router.get('/:id', controller.get);
router.get('/', controller.getall);
router.post('/',controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
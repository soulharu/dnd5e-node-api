'use strict'

const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        "Name":"dnd5e-node-api",
        "Version":"v0.2",
        "Creator":"soulharu"
    });
});

module.exports = router;
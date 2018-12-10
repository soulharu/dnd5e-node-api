'use strict'

const mongoose = require('mongoose');
const Spell = mongoose.model('Spell')

exports.post = (req,res,next) => {
    let spell = new Spell(req.body);
    spell
        .save()
        .then(x => {
            res.status(201).send({
                "message" : "Spell created!",
                "data" : req.body
            });
        })
        .catch(e => {
            res.status(400).send({
                "message" : "Something wnet wrong.",
                "data" : e
            });
        });  
};
exports.getall = (req,res,next) => {
    Spell
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send({
                "message" : "Something wnet wrong.",
                "data" : e
            });
        });
};
exports.get = (req,res,next) => {
    Spell
        .findOne({
            spell_id:req.params.id
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send({
                "message" : "Something wnet wrong.",
                "data" : e
            });
        });
};
exports.put = (req,res,next) => {
    res.status(200).send(
        {
            "message" : "Update",
            "id": req.params.id,
            "content" :req.body
        });
};
exports.delete = (req,res,next) => {
    res.status(200).send("deleted spell with id " + req.params.id);
};
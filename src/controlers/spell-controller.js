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
}
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
}
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
}
exports.put = (req,res,next) => {
    Spell
        .findOneAndUpdate({
            spell_id:req.params.id
        },
        {
            $set:{
                spell_id:req.body.spell_id,
                name:req.body.name,                
                level:req.body.level,
                school:req.body.school,
                castingTime:req.body.castingTime,
                range:req.body.range,
                components:req.body.components,
                materialComponentDescription:req.body.materialComponentDescription,
                duration:req.body.duration,
                hasConcentration:req.body.hasConcentration,
                canBeRitual:req.body.canBeRitual,
                description:req.body.description,
                damage:req.body.description,
                damageType:req.body.damageType,
                hasHigherLevels:req.body.hasHigherLevels,
                higherLevelDescription:req.body.higherLevelDescription,
                book:req.body.book,
                page:req.body.page
            }
        })
        .then(data => {
            res.status(200).send({
                "message" : "Spell updated!",
                "data" : req.body
            });
        })
        .catch(e => {
            res.status(400).send({
                "message" : "Something wnet wrong.",
                "data" : e
            });
        });
}
exports.delete = (req,res,next) => {
    Spell
        .findOneAndRemove({
            spell_id:req.params.id
        })
        .then(data => {
            res.status(200).send({
                "message":"Spell removed!"
            });
        })
        .catch(e => {
            res.status(400).send({
                "message" : "Something wnet wrong.",
                "data" : e
            });
        });
}
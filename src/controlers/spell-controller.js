'use strict'

exports.post = (req,res,next) => {
    res.status(201).send(req.body);
};

exports.get = (req,res,next) => {
    res.status(200).send({
        "_id" : req.params.id,
        "name" : "Fire Bolt",
        "level" : 0,
        "school" : "Evocation",
        "casting-time" : "1 action",
        "range" : "120 feet",
        "components" : "VS",
        "material -component-description" : "",
        "duration" : "Instantaneous",
        "is-concentration" : 0,
        "is-ritual" : 0,
        "description" : "You hurl a small flame at a creature you can see, making a ranged spell attack. The target takes 1d10 fire damage on hit. The fire ignites any flammable object hit by it that isn't being worn or carried.",
        "damage" : "1d10",
        "damage-type" : "fire",
        "has-higher-levels" : 1,
        "higher-level-description" : "The spell's damage die increase by one at levels 5, 11, and 17.",
        "book" : "Player's Handbook",
        "page" : 242
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
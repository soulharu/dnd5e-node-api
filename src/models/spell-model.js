'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    spell_id:{
        type:Number,
        required:true,
        unique:true,
        index:true
    },
    name:{
        type:String,
        unique:true,
        required:true
    },
    level:{
        type:Number,
        required:true 
    },
    school:{
        type:String,
        required:true
    },
    castingTime:{
        type:String,
        required:true
    },
    range:{
        type:String,
        required:true
    },
    components:[{
        type:String,
        required:false
    }],
    materialComponentDescription:{
        type:String,
        required:false
    },
    duration:{
        type:String,
        required:true
    },
    hasConcentration:{
        type:Boolean,
        required:true
    },
    canBeRitual:{
        type:Boolean,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    damage:{
        type:String,
        required:true
    },
    damageType:{
        type:String,
        required:true
    },
    hasHigherLevels:{
        type:Boolean,
        required:true
    },
    higherLevelDescription:{
        type:String,
        required:false
    },
    book: {
        type:String,
        required:true
    },
    page:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Spell',schema);
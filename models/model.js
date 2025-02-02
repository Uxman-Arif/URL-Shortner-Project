const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortid :{
        type: String,
        unique: true,
    },
    urlgenerated: {
        type: String, 
        required: true,
    },
    requests : [ {timestamps:{
        type: Date,
        default: Date.now
    }} ]

}, {timestamps:true})

const urlmodel = mongoose.model('short_url', urlSchema)

module.exports = urlmodel
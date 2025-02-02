const express = require('express');
const allmodels = require('../models/model');
const special_routes =express.Router()

special_routes.get('/',async (req, res)=>{
    console.log('yes')
    return res.render('index')
})

module.exports = special_routes
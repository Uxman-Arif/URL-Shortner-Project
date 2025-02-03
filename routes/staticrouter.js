const express = require('express');
const allmodels = require('../models/model');
const special_routes =express.Router()

special_routes.get('/',async (req, res)=>{
    return res.render('index')
})
// .post('/', async (req, res)=>{
//     console.log('The post function is running.')
//     console.log(`You enter the url ${req.body.url}`)
//     return res.render('index')
// })

module.exports = special_routes
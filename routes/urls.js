const express = require('express');
const views = require('../controller/controller');
const routes = express.Router();

routes.route('/').post(views.urlpost)
routes.route('/:id').get(views.shorturl)

module.exports = routes
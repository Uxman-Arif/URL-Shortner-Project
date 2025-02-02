const express = require('express');
const path = require('path');
const connect = require('./connect');
const routes = require('./routes/urls')
const special_routes = require('./routes/staticrouter')

connect('mongodb://127.0.0.1:27017/urlschema');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use('/', special_routes)
app.use('/user', routes)

app.listen(8000, ()=>console.log('Server started'));
const express = require('express')
const app = express()
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(3000, (req, res) => {
    console.log('server run');
})
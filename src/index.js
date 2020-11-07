const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('main');
})

app.listen(3000, (req, res) => {
    console.log('server run');
})
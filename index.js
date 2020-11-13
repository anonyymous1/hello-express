const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // res.send('Hello, SEI World!');
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index', { myVar: 'woohoo' })
    res.status(200);
});

app.get('/about', function(req, res) {
    // res.send('This is the about page.')
    // res.sendFile(__dirname + '/views/about.html');
    res.render('about')
    res.status(200);
});


app.get('/blog/:date', (req, res) => {
    // res.send('Welcome to my blog.')
    // res.sendFile(__dirname + '/views/blog.html');
    const theDateTheyWant = req.params.date
    res.render('/blog', { date: theDateTheyWant })
    res.status(200);
});

// app.listen(3000);    //(OR BELOW, NOT BOTH)

app.listen(3000, () => {
    console.log('Server Started!');
});
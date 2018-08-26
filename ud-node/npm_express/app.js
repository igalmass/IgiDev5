var express = require('express');

var app = express();

var port = process.env.MY_TEST_PORT || 3000;

app.use('/assets', express.static(__dirname + "/public"));

app.use('/', function(req, res, next){
    console.log('request URL:' + req.url);
    next();
});

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
      res.render('index');
});



app.get('/person/:id' , function(req, res){
    res.send('helloooo person ' + req.params.id);
});

app.get('/api', function(req, res){
    res.json({ firstname: 'jon', lastname: 'doe'});
});

app.listen(port);
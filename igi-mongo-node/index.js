const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ninjago', {userNewUrlParser: true});
mongoose.Promise = global.Promise;



// set up exporess app
const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api', require('./routes/api'));

// error handling
app.use(function(err, req, res, next){
   //console.log(err);
    res.status(422).send({error: err.message});
});

const listeningPort =  process.env.port || 4000;
app.listen(listeningPort, function() {
    console.log("now listening for requests on port " + listeningPort);
});
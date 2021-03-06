const commandLineArgs = require('command-line-args');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// server.js
const optionDefinitions = [
    { name: 'verbose', alias: 'v', type: Boolean },
    { name: 'src', type: String, multiple: true, defaultOption: true },
    { name: 'timeout', alias: 't', type: Number },
    { name: 'serverIP', type: String, defaultValue: 'localhost'},
    { name: 'serverPort', alias: 'p', type: Number, defaultValue: 4111}
]

const options = commandLineArgs(optionDefinitions);

console.log(options);

mongoose.connect('mongodb://localhost:27017/myBooks', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const app = express();



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', require('./routes/books-router'));

// error handling
app.use(function(err, req, res, next){
    console.log(err);
    debugger;
    res.status(422).send({error: err.message});
});

app.listen(3000, () => console.log(`Example app listening on port ${options.serverPort} !`))
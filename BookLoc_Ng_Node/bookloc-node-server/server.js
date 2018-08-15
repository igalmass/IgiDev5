const commandLineArgs = require('command-line-args');
const express = require('express');


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

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', require('./routes/books-router'));

app.listen(3000, () => console.log(`Example app listening on port ${options.serverPort} !`))
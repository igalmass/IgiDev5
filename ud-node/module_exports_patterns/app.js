const greet1 = require('./greet1');

greet1();

const greet2 = require('./greet2').greet;


greet2();

const greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "changed";

const greet3b = require('./greet3');
greet3b.greet();

const greet4 = require('./greet4');

var grtr = new greet4();

var greet5 = require('./greet5').greet;
greet5();
function Greeter() {
    this.greeting = "hello world 3!!!!";

    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greeter;
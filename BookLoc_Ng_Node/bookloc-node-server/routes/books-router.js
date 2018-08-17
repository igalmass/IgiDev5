const express = require('express');
const router = express.Router();
const myBookFaker = require("../faker/my-book-faker");

// const books = [
//     { isbn: "34", title: 'The Three Musketeer', pageCount: 338 },
//     { isbn: "56", title: 'The Four Musketeer', pageCount: 415  }];

router.get('/books', function (req, res, next) {
    const books = myBookFaker.fakeNew();
    res.send(books);
});

module.exports = router;

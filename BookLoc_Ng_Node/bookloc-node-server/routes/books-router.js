const express = require('express');
const router = express.Router();
const myBookFaker = require("../faker/my-book-faker");
const Books = require('../models/book.model');

// const books = [
//     { isbn: "34", title: 'The Three Musketeer', pageCount: 338 },
//     { isbn: "56", title: 'The Four Musketeer', pageCount: 415  }];

router.get('/books/faked', function (req, res, next) {
    const books = myBookFaker.fakeNew();
    res.send(books);
});

router.get('/books', function (req, res, next) {
    Books.find().then(books => {
        debugger;
        const response = [];
        books.forEach(curBook => response.push(
            {
                "id": curBook._id,
                "title": curBook.title,
                "isbn": curBook.isbn,
                "pageCount": curBook.pageCount
            }
        ));
        res.send(response)
    });
});

router.post('/books', function (req, res, next) {
    //console.log(req.body);
    const body = req.body;
    console.log("The body is: ");
    console.log(body);
    Books
        .create(req.body)
        .then(function (ninja) {

            res.send(ninja);

        }).catch(next);

});





module.exports = router;

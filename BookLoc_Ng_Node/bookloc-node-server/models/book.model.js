const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// //  create geoLocation Schema
// const GeoSchema = new Schema({
//     type: {
//         type: String,
//         default: "Point"
//     },
//     coordinates: {
//         type: [Number],
//         index: "2dsphere"
//     }
// });


//  create ninja Schema & model
const BookSchema = new Schema({
    isbn: {
        type: String,
        required: [true, 'isbn field is required']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    pageCount: {
        type: Number,
        required: [true]
    }
});

const BookModel = mongoose.model('book', BookSchema);

module.exports = BookModel;


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    author_first: {type: String, required: true},
    author_Last: {type: String, required: true},
    available: Number,
    existing_copies: Number,
    genres: [String],
    pages: Number,
    publisher: String,
    summary: String,
    title: String
})

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;

//Configuration
var Book = require('./models/book.js');

mongoose.connect(database.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //We're Connected
});

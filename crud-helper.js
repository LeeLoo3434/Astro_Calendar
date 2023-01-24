require('dotenv').config();
// Connect to the database
require('./config/database');

/*--- Require the app's Mongoose models ---*/
const Blog = require('./models/blog');


/*--- Define Variables to Hold Documents ---*/
let blog, blogs;


/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
// Movie.find({}).then(console.log('found movies'));

// console.log('Time to CRUD!');
// Movie.updateMany(
//     {},  // Query object determines which docs to update
//     {cast: []},  // Update object has properties to update
//     function(err, result) {console.log(result)}
// );

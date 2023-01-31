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
Blog.find({}).then(console.log('found blogs'));

// console.log('Time to CRUD!');
// Blog.updateMany(
//     {},  // Query object determines which docs to update
//     {Blog},  // Update object has properties to update
//     function(err, result) {console.log(result)}
// );

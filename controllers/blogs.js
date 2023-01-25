const Blog = require("../models/blog");



module.exports = {
index,
create,
new:newBlog,
show,
edit,
};

function index(req, res) {
    Blog.find({}, function (err, blogs) {
    res.render("blogs/index", { blogs });
    });
}

function create(req, res) {
    // Convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // // Delete empty properties on req.body for defaults to happen
    // for (let key in req.body) {
    //   if (req.body[key] === "") delete req.body[key];
    // }
    // One way to create data using a mongoose model
    // Movie.create(req.body, function(err, newMovie) {
    //   // functionality to run after movie has been created
    // })
    const blog = new Blog(req.body);
    blog.save(function (err) {
        console.log(blog);
        res.redirect('/blogs');
    });
}
    function newBlog(req, res) {
    res.render("blogs/new");
}

function show(req, res) {
    Blog.findById(req.params.id, (err, blog) => {
      if (err) {
        console.log(err);
        return "Error occurred while trying to find the blog";
      }
      if (!blog) {
        return "Blog not found";
      }
      res.render("blogs/show", { blog });
    });
  }

  function edit(req,res){
   
  }


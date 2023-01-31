const Blog = require("../models/blog");

module.exports = {
index,
create,
new:newBlog,
show,
edit,
delete:deleteBlog
};

function index(req, res) {
    if (!req.user) return res.redirect('/');
    if(req.user){
    Blog.find({user: req.user._id}, function (err, blogs) {
        if (err) {
            res.send(err);
        } else {
            res.render("blogs/index", { blogs:blogs });
        }
    });
    }
    else{
        res.redirect('/');
    }
}


function create(req, res) {
    const blog = new Blog(req.body);
    if (!req.user) return res.redirect('/');
    console.log(req.body);``
    blog.user = req.user._id;
    blog.save(function (err) {
        console.log(blog);
        res.redirect('/blogs');
    });
}

function newBlog(req, res) {
    res.render("blogs/new");
}

function show(req, res) {
    Blog.findById({_id: req.params.id})
        .populate('user')
        .exec((err, blog) => {
            if (err) {
                console.log(err);
            }
            if (!blog) {
                console.log("Blog not found")
            }
            res.render('blogs/show', {blog:blog})
        });
}


function edit(req,res){
    Blog.findById(req.params.id, function(err, foundBlog) {
    if (err) {
    res.redirect("/blogs");
    } else {
    res.render("blogs/edit", { blog: foundBlog });
        }
    })
}

function deleteBlog(req, res) {
    const id = req.params.id;
    Blog.deleteOne({ _id: id }, function(err) {
        if (err) {
        console.log(err);
        } else {
        res.redirect('/blogs');
        }
    });
}



const Blog = require("../models/blog");

module.exports = {
    create,

};

function create(req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        blog.todos.push(req.body)
        blog.save(function (err) {
            console.log(err)
            res.redirect(`/blogs/${blog._id}`)
        })
    })
}
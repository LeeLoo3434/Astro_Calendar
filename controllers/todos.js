const Blog = require("../models/blog");

module.exports = {
    create,
    delete:deleteTodo
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


async function deleteTodo(req, res, next) {
    try {
        const blog = await Blog.findOne({ 'todos._id': req.params.id, 'todos.user': req.user._id })
        if(!blog) return res.redirect('/blogs')
        blog.todos.remove(req.params.id)
        await blog.save()
        res.redirect(`/blogs/${blog._id}`)
    } catch(err) {
        return next(err)
    }
}
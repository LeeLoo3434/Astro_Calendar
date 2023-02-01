const Todo = require("../models/blog");

module.exports = {
    new:newTodo,
    };

    function newTodo(req, res) {
        res.render("todos/new");
    }
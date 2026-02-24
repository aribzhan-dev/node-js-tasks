const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean,
})

module.exports = mongoose.model('ToDo', toDoSchema)

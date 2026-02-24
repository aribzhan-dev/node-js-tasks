const express = require('express');
const app = express();
const ToDo = require("./models/ToDo");
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ToDodb',) 
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



app.post('/todo', async (req, res) => {
    const todo = new ToDo(req.body);
    await todo.save();
    res.json(todo);
})

app.get('/todos', async (req, res) => {
    const todos = await ToDo.find();
    res.json(todos);
})

app.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const updatedToDo = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedToDo);
})

app.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);
    res.json({ message: 'ToDo deleted' });
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`)
})
const express = require('express');
const app = express();
const User = require("./models/User");
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testdb',) 
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



app.get('/', (req, res) => {
    res.send("Api is working");
})

app.post('/user', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
})

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`) 
})
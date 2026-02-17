const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

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
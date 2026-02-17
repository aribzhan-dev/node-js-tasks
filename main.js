const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to the homepage!");
    } else if (req.url === "/about"){
        res.end("Welcome to the about page!");
    } else if (req.url === "/api/me"){
        res.setHeader("Content-Type", "application/json");

        const me = {
            name: "Aribzhan",
            age: 18,
            city: "Astana"
        }

        res.end(JSON.stringify(me))
    } else if (req.url === "/api/data"){
        res.setHeader("Content-Type", "application/json");

        const data = {
            about: "This is some data about the server",
            version: "1.0.0",
        }

        res.end(JSON.stringify(data))
    } else if (req.url === "/api/contact") {
        res.setHeader("Content-Type", "application/json");

        const contact = {
            email: "aribzankamilzanov@gmail.com",
            phone: "+7 777 777 77 77",
        }

        res.end(JSON.stringify(contact))
    } else {
        res.end("404 Not Found");
    }
})



server.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`)
})
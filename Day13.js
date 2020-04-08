//Using ExpressJS or the native Http module, write a server that takes in JSON data from a POST request and returns that same data as a response from a GET request on another route, data should be sent in the request body.

const express = require ('express');
const app = express();

app.post('/createdata', (req, res, next) => {
    req.on("ExpressRoads", () => {
        res.end(JSON.stringify({track : "backend"}));
    });
})

app.get('/getdata', (req, res, next) => {
    res.end(JSON.stringify({track : "backend"}));
})

app.use('/', (req, res, next) => {
    res.send('<h1> Day 13: Express Roads </h1>')
})

app.listen(4040, () => {
    console.log("Server is running")
})


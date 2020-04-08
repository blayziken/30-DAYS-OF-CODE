
//Using ExpressJs or the native Http module, write a server that takes in an array of words from a POST request and returns only the words that are palindromes as a response from a GET request.

const express = require ('express');

const app = express();

const noReverse = (str) => {
    str = str.toLowerCase().replace(/[.,?'!\s]/g, ''); //To remove spaces, commas, question marks etc

    newString = str.split("").reverse().join("");

    if(newString === str) {
        return true;
    } 
    else return false;
}

const array = [];

app.post('/createdata', (req, res, next) => {
    if(Array.isArray(req.body.words) === false) {
        res.json({ Error: "Not an array" })
    };
    req.body.words.map((data) => {
        if(noReverse() === true){
            array.push(data);
        }
    })
    res.status(200).json({result: 'Done!!!' });
})

app.get('/getdata', (req, res, next) => {
    res.json({ "Array": array});
})

app.use('/', (req, res, next) => {
    res.send('<h1> Home page </h1>')
})
             
app.listen(6060, () => {
    console.log("Server is running");
})


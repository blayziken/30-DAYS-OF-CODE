const express = require ('express')

const app = express()

const noReverse = (str) => {
    str = str.toLowerCase().replace(/[.,?'!\s]/g, ''); //To remove spaces, commas, question marks etc

    newString = str.split("").reverse().join("");

    if(newString === str) {
        return true;
    } 
    else return false;
}

const array = []

app.post('/createdata', (req, res, next) => {
    req.body.words.map((data) => {
        if(noReverse() === true){
            array.push(data)
        }
    })
    res.status(200).json({result: 'Done!!!' })
})

app.get('/getdata', (req, res, next) => {
    res.json({ "Array": array})
})

app.listen(6060, () => {
    console.log("Server is running")
})


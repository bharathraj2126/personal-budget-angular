// Budget API
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/', express.static('public'));



// app.get('/hello', (req,res) => {
//     res.send('Hello World!!');
// })

// app.listen(port, () => {
//     console.log('Listening at 3000x')

// })

const budget = {
    myBudget: [
        {
            title: 'Eat out!!',
            budget: 250
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 10
        },
    ]
};

  
app.use(cors());
// var data;
// fs.readFile('data.json', 'utf8', (err, file) => {
//     data = file;
//     return;
// })


app.get('/budget', (req, res) => {
    res.send(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
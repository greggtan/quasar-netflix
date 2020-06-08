const express = require('express');
app = express();

var path = require('path');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(process.cwd() + '/public'))
app.use(express.static(process.cwd() + '/dist/spa'))
console.log(process.cwd() + '/dist/spa')


app.listen(1313, () => {
    console.log('listening on port 1313!')
})

app.get('/', (req,res)=>{
    res.sendFile('./dist/spa/index.html', {root: process.cwd()});
})


const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagory = require('./data/catagory.json')

app.get ('/',(req, res)=>{
    res.send('Api Running')
});

app.get('/news-catagory',(req, res)=>{
    res.send (catagory)
})

app.listen(port, ()=>{
    console.log('Dragon News server runnim=ng on port ',port);
})
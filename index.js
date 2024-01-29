const express = require("express");
const app = express();
const PORT = 8085;

const client = require('./db/client');

const cors = require('cors');
app.use(cors());

client.connect();

app.get("/", (req, res)=>{
    res.send('hello world')
})

app.use('/api', require('./api'))

app.listen(PORT, ()=>{
    console.log("Server is on")
});
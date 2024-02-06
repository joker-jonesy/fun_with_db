const express = require("express");
const app = express();
const PORT = 8085;

const cors = require('cors');
app.use(cors());

app.use(express.json())


app.get("/", (req, res)=>{
    res.send('hello world')
})

app.use('/api', require('./api'));
app.use("/auth", require("./api/auth"))

app.listen(PORT, ()=>{
    console.log("Server is on")
});

module.exports= app;
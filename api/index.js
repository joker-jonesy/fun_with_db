const express = require("express");
const router = express.Router();


router.get('/location', (req, res)=>{
    res.send("Denmark")
})

router.use("/sets", require("./sets"))


module.exports = router;
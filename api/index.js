const express = require("express");
const router = express.Router();


router.get('/location', (req, res)=>{
    res.send("Denmark")
})

router.use("/sets", require("./sets"))
router.use("/tags", require("./tags"))


module.exports = router;
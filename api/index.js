const express = require("express");
const router = express.Router();

router.use("/sets", require("./sets"))
router.use("/tags", require("./tags"))



module.exports = router;
const express = require("express")
const router = express.Router();

const {getAllTags} = require('../db/tags')

router.get('/', async(req, res, next)=>{
    try {
        const sets = await getAllTags();
        res.send(sets);
    }catch(error){
        next(error)
    }
})

module.exports = router;

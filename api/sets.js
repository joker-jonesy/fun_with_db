const express = require("express")
const router = express.Router();

const {getAllSets, getSetById} = require('../db/sets')

router.get('/', async(req, res, next)=>{
    try {
        const sets = await getAllSets();
        res.send(sets);
    }catch(error){
        next(error)
    }
})

router.get('/:id', async (req, res, next)=>{
    try {
        const set = await  getSetById(req.params.id);
        res.send(set);
    }catch(error){
        next(error)
    }
})

module.exports = router;
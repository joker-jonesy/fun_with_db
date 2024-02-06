const router = require("express").Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

router.post("/register", async (req, res,next)=>{

    console.log(req.body)

    const salt =5;

    const hashPassword = await bcrypt.hash(req.body.password, salt)

    try{
        const user = await prisma.user.create({
            data:{
                username: req.body.username,
                password:hashPassword
            }
        })

        const token = jwt.sign({id:user.id}, process.env.JWT);

        res.status(201).send({token, user:{userId:user.id}})

    }catch(err){
        next(err)
    }



})

module.exports= router;
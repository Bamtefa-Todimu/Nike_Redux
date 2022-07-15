const routes = require('express')()
const verifyToken = require('../middleware/verifyToken')
const userModel = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')

routes.post('/login',async(req,res) => {

    console.log(req.body)
    try
    {
        const existingUser = await userModel.findOne({
            email:req.body.email
        })

        if(existingUser)
        {

            const validPassword = await bcrypt.compare(req.body.password,existingUser.password)
            
            if(validPassword)
            {

                const token = await jwt.sign(existingUser.email,process.env.JWT_SECRET)
                return res.json({
                    error:false,
                    message:"Successfully Logged In.",
                    data:{token:token,firstname:existingUser.firstname}
                })
            }

            return res.json({
                error:false,
                errorMessage:"Please enter a valid password.",
                message:"Please enter a valid password.",
                data:[]
        })

            
        }

        return res.json({
                error:false,
                errorMessage:"Please enter a valid email address.",
                message:"Please enter a valid email address.",
                data:[]
        })

        
    }
    catch(e)
    {
        console.log(e)
        return res.json({
            error:true,
            message:"internal server error",
            data:[]
        })
    }
})


routes.post('/register',async(req,res) => {
    console.log(req.body)

    try
    {
        const existingUser = await userModel.findOne({
            email:req.body.email
        })

        if(existingUser)
        {
            return res.json({
                error:false,
                errorMessage:"It looks like you're already a Member.",
                message:"It looks like you're already a Member.",
                data:[]
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const createUser = await userModel.create({...req.body,password:hash})
        const savedUser = await createUser.save()

        console.log(savedUser)

        const token = await jwt.sign(savedUser.email,process.env.JWT_SECRET)
                return res.json({
                    error:false,
                    message:"Successfully Registered",
                    data:{token:token,firstname:savedUser.firstname}
                })
    }
    catch(e)
    {
        console.log("from route")
        console.log(e)
        return res.json({
            error:false,
            message:"internal server error",
            data:[]
        })
    }
})


module.exports = routes
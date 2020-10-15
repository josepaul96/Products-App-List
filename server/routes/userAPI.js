const express = require('express')
const userRouter = express.Router();

const User = require("../models/user")

const mongoose = require ("mongoose")
const db = "mongodb+srv://jose-paul:Begood96!@clustershaman.up5a8.mongodb.net/productsapp?retryWrites=true&w=majority"

mongoose.connect(db,err =>{
    if(err){
        console.log("Oops" + err)
    }
    else{
        console.log("Connected to MongoDB")
    }
})


// userRouter.get('/',(req,res)=>{
//     res.send("hello")
// })

// Sign Up
userRouter.post("/register",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
     let userData = req.body.userData;
     console.log(req.body);
     let user = new User(userData);
    //  user.email = userData.email;
    //  user.password = userData.password;
     user.save((error, registeredUser)=>{
         if(error){
             console.log("Oops " + error)
         }
         else{
            //  console.log("User Added")
            res.status(200).send(registeredUser)
         }
     }) 
})




// Sign In

userRouter.post("/login",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
    let userData = req.body.userData;
    
    User.findOne({email: userData.email},(error, user)=>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                console.log("Invalid Email")
                res.status(401).send("Invalid Email")
            }
            else{
                if (user.password !== userData.password){
                    console.log("Invalid Password")
                    res.status(401).send("Invalid Email")
                }
                else{
                    console.log("valid user")
                    res.status(200).send(user)
                }
            }

        }
    })
})





module.exports = userRouter
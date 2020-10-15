const express = require('express')
const productRouter = express.Router();
// const cors = require('cors');
// const bodyParser = require("body-parser");

const Product = require("../models/products")

const mongoose = require ("mongoose")
const db = "mongodb+srv://jose-paul:Begood96!@clustershaman.up5a8.mongodb.net/productsapp?retryWrites=true&w=majority"

mongoose.connect(db,{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
},err =>{
    if(err){
        console.log("Oops" + err)
    }
    else{
        console.log("Connected to MongoDB")
    }
})




// Products CRUD

productRouter.get("/",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
    Product.find().then((products)=>{
        res.send(products)
    })
})

productRouter.post("/insert",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT,PATCH, DELETE, OPTIONS");
    console.log(req.body)
    var product = {
        productId: req.body.product.productId,
        productName: req.body.product.productName,
        productCode: req.body.product.productCode,
        releaseDate: req.body.product.releaseDate,
        description: req.body.product.description,
        price :      req.body.product.price,
        starRating:  req.body.product.starRating,
        imageUrl:    req.body.product.imageUrl
    }
    var newProduct = new Product(product)
    newProduct.save();
})


// Access By Id


productRouter.post("/getproduct",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
    
    var id = req.body.id;
    Product.findById(id, function (err, product) {
        res.send(product)
    });
})


// edit item

productRouter.put("/edit",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
    console.log(req.body.product.productId)
    id = req.body.product.productId
    Product.findByIdAndUpdate(req.body.product._id,{
        productId: req.body.product.productId,
        productName: req.body.product.productName,
        productCode: req.body.product.productCode,
        releaseDate: req.body.product.releaseDate,
        description: req.body.product.description,
        price :      req.body.product.price,
        starRating:  req.body.product.starRating,
        imageUrl:    req.body.product.imageUrl
    }, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated User : ", docs); 
        }  
    })
})





// delete item

productRouter.post("/delete",(req,res)=>{
    console.log("iam called")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
    
    let id = req.body.tobeDeletedId.id;

    Product.deleteOne({_id:id},function(err, result) {
        if (err) {
            console.log(err)
          res.send(err);
        } else {
            console.log(result)
          res.send(result);
        }
      })
})



module.exports = productRouter
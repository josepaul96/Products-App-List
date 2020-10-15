const express = require("express");
const bodyParser= require('body-parser');
const cors = require('cors');
const PORT = 4000;

const app = express();
const userAPI = require("./routes/userAPI")
const productsAPI = require("./routes/productsAPI")
app.use(bodyParser.json());

app.use(cors());

app.use('/userAPI',userAPI)
app.use("/productsAPI" , productsAPI)
app.listen(PORT, ()=>{
    console.log("You have arrived at Port" + PORT);
})




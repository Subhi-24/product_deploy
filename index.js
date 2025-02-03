const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')


app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/sample')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))


 app.use(express.json()) 
 app.use("", productRouter);
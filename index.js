const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')


app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://2216119:24%40Subhi@mycluster.z5i1x.mongodb.net/?retryWrites=true&w=majority&appName=myCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))
    

 app.use(express.json()) 
 app.use("", productRouter);
 console.log('New Update')

 app.get('/', (req, res)=>{
     res.send('server reacted...')
 })

const express = require('express')
const mongoose = require('mongoose');
const product = require('./models/product.model');
const productRoutes = require('./routes/product.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

//routes
app.use("/api/products", productRoutes);

const connect= mongoose.connect( "mongodb://localhost:27017/crud-api");

connect.then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

 


app.listen(5000,()=>{
    console.log('Server started at port 5000');
})
const express = require('express');
const Product = require('../models/product.model')
const router = express.Router();

const {getProducts 
    , getOneProduct
    ,updateProduct
    , deleteProduct
    ,createProduct
} = require('../controllers/product.controller');


router.get('/',getProducts);
router.get('/:id',getOneProduct);
router.put('/:id',updateProduct);
router.delete('/:id', deleteProduct);
router.post('/',createProduct);



module.exports = router;
const product= require('../models/product.model')


const getProducts = async (req,res)=>{

    try{
        const products = await product.find({});
        res.status(200).json(products);
           }catch{
              res.status(500).json({message: err.message})
           }

}


const getOneProduct= async (req,res)=>{
    try{
        const {id}=req.params;
 const products = await product.findById(id);
 res.status(200).json(products);
    }catch{
       res.status(500).json({message: err.message})
    }
}


const updateProduct = async (req,res)=>{
    try{
        const {id}=req.params;
 const products = await product.findByIdAndUpdate(id, req.body);

 if(!products){
 return res.status(404).json({message: err.message});
 }

 const update = await product.findById(id);
 res.status(200).json(update);
 
    }catch{
       res.status(500).json({message: err.message})
    }
}


const deleteProduct = async (req,res)=>{
    try{
        const {id}=req.params;
 const products = await product.findById(id);

 if(!products){
 return res.status(404).json({message: err.message});
 }

 const deletePro = await product.findByIdAndDelete(id)
 res.status(200).json({ message: 'Product deleted successfully', data: deletePro });
 
    }catch{
       res.status(500).json({message: err.message})
    }
}


const createProduct = async (req,res)=>{
    try{

        const newproduct = await product.create(req.body);
        res.status(201).json(newproduct);

    }catch (err){
        res.status(500).json({message: err.message})
    }
}


module.exports = {
    getProducts ,
    getOneProduct,
    updateProduct,
    deleteProduct,
    createProduct
}
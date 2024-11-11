import Products from "../models/productModel.js";

const productController = {

  createProducts : async(req, res)=>{
      try{
        let createProduct = await new Products(req.body);
        await createProduct.save();
        res.status(200).json(created);
      }catch(error){
        console.log(error);
        res.status(500).json({message:"Error while adding products"});
      }
  },
  
  getProducts : async(req,res) =>{
      try{
        let { brand ,category , user, page=1 , limit=10 , order ='asc' , sort :sortBy = '_id' } = req.query;

        const filter= {
          ...(brand && { brand : { $in : brand }}),
          ...(category && { category : { $in : category }}),
          ...(user && { isDeleted: false}),
        };

        const sortOrder = order === 'asc' ? 1 : -1;
        const sort = { [sortBy]: sortOrder };

        const skip = (page - 1) * limit;

        const [ totalDocs,result ] = await Promise.all([
            Products.countDocuments(filter),
            (await Products.find(filter).sort(sort).populate("brand").skip(skip)).limit(Number(limit))
        ]);

        res.set("X-Total-Count" , totalDocs);
        res.status(200).json(result);
        
      }catch(error){
        console.log(error);
        res.status(500).json({message:"Eroor getting data"});
      }
  },

  getProductById : async(req,res) =>{
      try{
          let { id } = req.params;
          let result = await Products.findById(id).populate("brand").populate("category");
          res.status(200).json(result);
      }catch(error){
        console.log(error);
        res.status(500).json({message :"Cannot find product by id"});
      }
  },

  updateProductById : async(req,res) =>{
     try{
        let { id } = req.params;
        let result = await Products.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(result);
     }catch(error){
      console.log(error);
      res.status(500).json({message:"Error updating product"});
     }
  },

  deleteProductById : async(req,res)  =>{
   try{
      let { id } = req.body;
      let result = await Products.findByIdAndDelete(id , {isDeleted : true},{new:true}).populate("brand");
      res.status(200).json(result);
   }catch(error){
    console.log(error);
    res.status(500).json({message: "Error occured while deleting product"});
   }
  },

  undeleteProductById : async(req,res) =>{
    try{
       let { id } = req.body;
       let result = await Products.findByIdAndUpdate(id, {isDeleted:false}, {new:true}).populate("brand");
       res.status(200).json(result);
    }catch(error){
      console.log(error);
      res.status(500).json({messgae : "Error deleting products"});
    }
  },

};

export default productController;
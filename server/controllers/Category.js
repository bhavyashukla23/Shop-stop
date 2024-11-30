import Category from '../models/categoryModel';

const categoryController ={
     getAll : async(req,res) =>{
        try{
           const result = await Category.find({});
           res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json({'message':'Could not get all categories'});
        }
     }
};

export default categoryController;
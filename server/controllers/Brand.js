import Brand from '../models/brandModel';

const brandController ={
     getAll : async(req,res) =>{
        try{
           const result = await Brand.find({});
           res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json({'message':'Could not get all Brands'});
        }
     }
};

export default brandController;
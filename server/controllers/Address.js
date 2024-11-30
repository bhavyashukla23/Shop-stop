import Address from "../models/addressModel";

const addressController ={
    
    create: async(req,res) =>{
        try{
            const create = new Address(req.body);
            await create.save();
            res.status(200).json(create);
         }catch(error){
             console.log(error);
             res.status(500).json({'message' : 'Error getting adress bu id'});
         }
    },

    deleteById: async(req,res) =>{
        try{
            const {id}=req.body;
            const result = await Address.findByIdAndDelete(id);
            res.status(200).json(result);
         }catch(error){
             console.log(error);
             res.status(500).json({'message' : 'Error DELEting adress bY id'});
         }
    },

    updateById: async(req,res) =>{
        try{
            const {id}=req.body;
            const result = await Address.findByIdAndUpdate(id, req.body , {new:true});
            res.status(200).json(result);
         }catch(error){
             console.log(error);
             res.status(500).json({'message' : 'Error updating adress by id'});
         }
    },

    getByUserId: async(req,res) =>{
        try{
           const {id}=req.body;
           const result = await Address.findById(id);
           res.status(200).json(result);
        }catch(error){
            console.log(error);
            res.status(500).json({'message' : 'Error getting adress bY id'});
        }
    }
};

export default addressController;
import User from '../models/userModel.js';


const userController ={
    getById : async(req , res)=>{
       try{
          const { id } = req.params;
          let result = await User.findById(id);
          result=result.toObject();
          delete result.password;
          res.status(200).json(result);
       }catch(error){
         console.error("Error is:" + error);
         res.status(500).json({message: 'Error while getting details, try again later'});
       }
   },

   updateById : async(req , res)=>{
      try{
           const { id } = req.params;
           let result = await User.findByIdAndUpdate(id , req.body, { new: true });
           result.toObject();
           delete result.password;
           res.status(200).json(result);

      }catch(error){
        console.log("Error is:"+ error );
        res.status(500).json({message:'Error while updating details, try again later'});
      }
   },
};

export default userController;
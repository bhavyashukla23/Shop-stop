import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    streetNo:{
        type:String,
      required:true
    },
    landmark:{
        type:String,
      required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
      required:true
    },
    pinCode:{
       type:Number,
       required:true
    },
    country:{
      type:String,
      required:true
    }
});

const Address = mongoose.model("Address" , addressSchema);

export default Address;
import mongoose from "mongoose";

const optSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        reuired:true
    },
    otp:{
        type:Number,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    }
});

const Otp = mongoose.model("Otp" , optSchema);

export default Otp;
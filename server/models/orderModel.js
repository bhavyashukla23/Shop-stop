import mongoose from "mongoose";

const orderSchema  = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    address:{
        type:[Schema.Types.Mixed],
        required:true
    },
    items:{
        type:[Schema.Types.Mixed],
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Out For Delivery","Cancelled"],
        default:"Pending"
    },
    paymentMode:{
        type:String,
        enum:["Cash On Delivery" , "Net Banking" , "Debit/Credit Card"]
    },
    amount:{
        type:Number,
        requied:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Order = mongoose.model("Order" , orderSchema);

export default Order;
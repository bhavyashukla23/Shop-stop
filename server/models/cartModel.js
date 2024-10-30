import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
    
},{timestamps:true});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
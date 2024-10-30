import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    products:{
        type:Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    note:{
        type:String
    }
},{timestamps:true});

const Wishlist = mongoose.model("Wishlist" , wishlistSchema);

export default Wishlist;
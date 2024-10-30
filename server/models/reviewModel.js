import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    review:{
        type:String,
        required:true
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    }
},{timestamps:true});

const Review = mongoose.model("Review" , reviewSchema);

export default Review;
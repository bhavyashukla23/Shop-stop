import mongoose from "mongoose";

const product = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount: {
        type: Number,
        default: 0,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    brandName:{
        type:Schema.Types.ObjectId,
        ref:"Brand",
        required:true
    },
    stockNumber:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
},{timestamps:true});

const productModel = MODEL.Schema("productModel" , product);

export default productModel;
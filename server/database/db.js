import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async()=>{
 try{
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("DB is connected");
 }catch(error){
    console.log(error);
 }
};

export default connectDB;
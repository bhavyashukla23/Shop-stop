import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const paswrdResetSchema = new mongoose.Schema({
   user:{
    type : Schema.Types.ObjectId,
    ref : "User",
    required : true
   },

   token:{
    type : String,
    required : true
   },

   expiresAt : {
    type : Date,
    required : true
   },

});

const passwordReset = mongoose.model("passwordReset" , paswrdResetSchema);

export default passwordReset;


import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

const app=express();
dotenv.config();

const port = process.env.PORT;
connectDB();

app.listen(port ,()=>{
    console.log(`Server is working on ${port}`);
});
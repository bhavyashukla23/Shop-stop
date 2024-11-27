import User from "../models/userModel.js";
import Otp from "../models/otpModel.js";
import passwordReset from "../models/passwordResetModel.js";

import bcrypt from "bcrypt";

import sanitizeUser, { santizeUser} from "../utils/sanitizeUser.js";
import { sendEmail } from "../utils/generateEmails.js";
import { generateOtp } from "../utils/generateOtp.js";
import { generateToken } from "../utils/generateToken.js";
import { sanitizeFilter } from "mongoose";

const authController ={
 
    signup : async(req,res) =>{
        try{
             const existingUser = await User.findOne({email:req.body.email});

             if(existingUser){
              return  res.status(400).json({"message": "User already exists"});
             }

             const hashedPassword = await bcrypt.hash(req.body.password,10);
             req.body.password = hashedPassword;
             
             const createdUser =new User(req.user);
             await createdUser.save();

             const sanitizedInfo = sanitizeUser(createdUser);

             const token = generateToken(sanitizedInfo);

             res.cookies('token' , token , {
                samesite : process.env.PRODUCTION === 'true' ? "None" : "Lax",
                maxTime : new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION_DAYS *24 * 60 *60 *1000))),
                httpOnly : true,
                secure : process.env.PRODUCTION === 'true' ? true : false
             });

             res.status(200).json(sanitizeUser(createdUser));

        }catch(error){
              console.log(error);
              res.status(500).json({message : "Error occured during signup ,try again later"});
        }
    },

    login : async(req,res) =>{
        try{

            const existingUser = await User.findOne({email: req.body.email});

            if(existingUser && (await bcrypt.compare(req.body.password , existingUser.password))){

                const secureInfo = sanitizeUser(existingUser);
                const token = generateToken(secureInfo);

                res.cookies('token' , token , {
                    samesite : process.env.Production === 'true' ? 'None' : 'Lax',
                    maxTime : new Date ( Date.now() + (parseInt(process.env.COOKIE_EXPIRATION_DAYS *24 *60 *60 *1000))),
                    httpOnly : true,
                    secure : process.env.PRODUCTION === 'true' ? true : false
                }) 

                return res.status(200).json(sanitizeUser(existingUser));
            }

        }catch(error){
           console.log(error);
           res.status(500).json({message : " Error logging in , try again later"});
        }
    },

    logout : async(req,res) =>{
        try{
           res.cookies('token',{
            maxAge:0,
            sameSite:process.env.PRODUCTION === 'true' ? "None" : "Lax",
            httpOnly:true,
            secure:process.env.PRODUCTION === 'true'? true :false
           })
           res.status(200).json({'message' : 'Logout Successful'});
        }catch(error){
           console.log(error);
        }
    },

    resetPassword : async(req,res) =>{
        try{
            const existingUser= await User.findOne({email : req.body.email});
            if(!existingUser){
                res.status(400).json({'message' : 'User not found'});
            }

            const existingResetToken = await passwordResetToken.findOne({user:existingUser._id});
            if(!existingResetToken){
                res.status(404).json({'message':"Reset link is not valid"});
            }

            if(existingResetToken.expiresAt < new Date()){
                await passwordReset.findByIdAndDelete(existingResetToken._id);
                res.status(404).message({'message' : 'Reset link has expired'});
            }

            if(existingResetToken && existingResetToken.expiresAt > new Date() && (await bcrypt.compare(req.body.token, existingResetToken.token)));
            {
                await passwordResetToken(existingResetToken._id);
                await User.findByIdAndUpdate(existingUser._id , {password : await bcrypt.hash(req.body.password , 10)});
                return res.status(200).json({'message' : 'Password updated successfully'});
            }

           return  res.status(404).json({'message' : 'Reset link has expired'});
            
        }catch(error){
            console.log(error);
            res.status(500).json({'message' : 'Could not reset password due to some error'});
        }
    },

    forgotPassword : async(req,res) =>{
        let newToken;
        try{
            const existingUser = await User.findOne({email : req.body.email});

            if(!existingUser){
                res.status(404).json({'message':'User not found'});
            }

            await passwordReset.deleteMany({user:existingUser._id});

            const passwordResetToken = generateToken(sanitizeUser(existingUser),true); 
            const hashedToken = bcrypt.hash(passwordResetToken , 10);

            newToken  = passwordResetToken({user:existingUser._id , token:hashedToken , expiresAt : Date.now()+parseInt(process.env.OTP_EXPIRATION_TIME)});
            await newToken.save();

            await sendEmail(existingUser.email , 'Password Reset Link for Your Shop-stop Account',`<p>Hello ${isExistingUser.name}, We received a password reset request for your account. If initiated by you, use the following link to reset your password:</p>
            <p><a href=${process.env.ORIGIN}/reset-password/${isExistingUser._id}/${passwordResetToken} target="_blank">Reset Password</a></p>
            <p>This link is valid for a limited time. If you did not request a password reset, please ignore this email.
            Thank you,
            The Shop-Stop Team</p>`)

            res.status(200).json({'message':"Token sent successfully"});
        }catch(error){
            res.status(500).json({'message':'There was an error sending the reset token,try again later'});
            console.log(error);
        }
    },

    checkAuth : async(req,res) =>{
        try{
            if(req.user){
                const user = await User.findById(req.user._id);
                return res.status(200).json(sanitizeUser(user));
            }
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }
    },

    verifyOtp : async(req,res) =>{
        try{
            const isValidOtp = await User.findById(req.body.userId);

            if(!isValidOtp){
                return res.status(400).json({message :"User not found for generated otp."});
            }

            const isOtpExisting = await Otp.findOne({user:isValidUser._id});

            if(!isOtpExisting){
                return res.status(404).json({message:"Otp not found"});
            }

            if(isOtpExisting && (await bcrypt.compare(req.bodt.otp , isOtpExisting.otp))){
                await Otp.findByIdAndDelete(isOtpExisting._id)
                const verifiedUser = await User.findByIdAndUpdate(isValidUser._id , {new : true} , { isVerified : true})
                return res.status(200).json(sanitizeUser(verifiedUser))
            }

            return res.status(400).json({message : "Otp is invalid or expired"});

        }catch(error){
            console.log(error);
            res.status(500).json({message : "Error occured"});
        }
    },

    resendOtp : async(req,res) =>{
        try{
            const existingUser = await User.findById(req.body.user);

            if(!existingUser){
                res.status(404).json({'message':"User does not exist , plse sign up"});
            }

            await Otp.deleteMany({user:existingUser._id});

            const otp = generateOtp();
            const hashedOtp = bcrypt.hash(otp ,10);

            const newOtp= await Otp({user:req.body.user , otp:hashedOtp , expiresAt :Date.now()+parseInt(process.env.OTP_EXPIRATION_TIME)});
            newOtp.save();

            await sendEmail(existingUser.email , `OTP Verification for Your Account`,`Your One-Time Password (OTP) for account verification is: <b>${otp}</b>.</br>Do not share this OTP with anyone for security reasons`);

            res.status(201).json({'message':"Otp sent."});
        }catch(error){
           res.status(500).json({'message':'Error occured while sending otp , try again later'});
           console.log(error);
        }
    },
};

export default authController;
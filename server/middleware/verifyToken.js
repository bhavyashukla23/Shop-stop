import dotenv from 'dotenv';
dotenv.config();

const verifyToken = async(req , res, next) =>{

     try{
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({'message':'Token missing , try logging in again'});
        }

        const decodedInformation  = jwt.verify(token , process.env.SECRET_KEY);

        if(decodedInformation && decodedInformation.email){
            req.user=decodedInformation
            next()
        }else{
            return res.status(401).json({'message':'Invaid token , login in again'});
        }

     }catch(error){
        console.log(error);

        if(errpr instanceof jwt.TokenExpiredError){
            return res.status(401).json({'message':'Token expired, try logging in again'});
        }else if(error instanceof jwt.JsonWebTokenError){
            res.status(401).json({'message':'Invalid token ,try logging in again'});
        }else{
            return res.status(500).json({'message':'Internal server error'});
        }
     }
};

export default verifyToken;
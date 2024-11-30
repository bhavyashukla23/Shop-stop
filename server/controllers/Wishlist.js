import Wishlist from "../models/wishlistModel.js";

const wishlistController ={

     createWishlist : async(req,res) =>{
        try{
            let createWishlist = await new Wishlist(req.body).populate({path:"product" , populate:["brand"]});
            await createWishlist.save();
            res.status(200).json(createWishlist);

        }catch(error){
            console.log(error);
            res.status(500).json({message:"Error creating wishlist"});
        }
     },

     getWishlistByUserId : async(req,res) =>{
        try{
            let{id} = req.params;
            let skip=0;
            let limit=0;
            
            if(req.query.page && req.query.limit){
                let pageSize= req.query.limit;
                let page= req.query.page;

                skip=pageSize*(page-1);
                limit=pageSize;
            }
            
            let [result,overAllResult] = await Promise.all([
                Wishlist.find({user:id}).skip(skip).limit(limit).populate({path:"product" , populate:["brand"]}),
                (await Wishlist.find({user:id}).countDocuments().exec())
            ]);

            res.set("X-Total-Count",overAllResult)
            res.status(200).json(result)

        }catch(error){
            console.log(error);
            res.status(500).json({message :"Error fetching wishlist by user id"});
        }
     },

     deleteWishlistById : async(req,res) =>{     
        try{
            let {id} = req.params;
            let result = await Wishlist.findByIdAndDelete(id);
            res.status(200).json(result);

        }catch(error){
            console.log(error);
            res.status(500).json({message :" Error occured while deleting wishlist"});
        }
     },

     updateWishlistById : async(req,res) =>{
        try{

            let{id} = req.params;
            let result = await Wishlist.findByIdAndUpdate(id, req.body, {new:true}).populate("brand");
            res.status(200).json(result);

        }catch(error){
            console.log(error);
            res.status(500).json({message:"Error occured while updating wishlist"});
        }
     },

};

export default wishlistController;
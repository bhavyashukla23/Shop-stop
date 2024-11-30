import Review from '../models/reviewModel';

const reviewController ={
    
    create : async() => {
        try{
          const createReview = new Review(req.body).populate({path:'user' , select:'-password'});
          await createReview.save();
          res.status(200).json(createReview);
        }catch(error){
           console.log(error);
           res.status(500).json({'message':'Error creating review'});
        }
    },

    getProductById : async() => {
        try{
            const{ id }= req.params;
            let skip=0, limit=0;

            if(req.query.page && req.query.limit){
                let pageSize = req.query.limit
                let page = req.query.page
                
                skip=pageSize*(page-1);
                limit=pageSize                                                                      
            }

            const [totalDocs ,result]= await Promise.all ([
                Review.find({product:id}).createDocuments().exec(),
                (await Review.find({product:id}).skip(skip).limit(limit).populate('user').exec())
            ]);

            res.set('X-total-docs', totalDocs);
            res.status(200).json(result);

        }catch(error){
           console.log(error);
           res.status(500).json({'message':'Error fetching data'});
        }
    },

    updateProdyctById : async() =>{
        try{
             const {id}=req.params;
             const result = await Review.findByIdAndUpdate(id,req.body,{new:true}).populate('user');
             res.status(200).json(result);
        }catch(error){
          console.log(error);
          res.status(500).json({'message':'Error deleting rpoduct,try later'});
        }
    },

    deleteById : async() =>{
        try{
            const {id}=req.params;
             const result = await Review.findByIdAndDelete(id);
             res.status(200).json(result);
        }catch(error){
           console.log(error);
           res.status(500).json({'message':'Error deleting product, try again later'});
        }
    }
};

export default reviewController;
import Cart from "../models/cartModel.js";

const cartController = {
    
  createCart: async (req, res) => {
    try{
        let createCart = await new Cart(req.body).populate({path:"product" , populate:{path: "brand"}});
        await createCart.save();
        res.status(200).json(result);
    }catch(error){
        console.log(error);
        res.status(500).json({message : "Error adding products to cart"});
    }
  },

  updateCartById: async (req, res) => {
    try {
      let { id } = req.params;
      let result = await Cart.findByIdAndUpdate(id, req.body, { new: true}).populate({ path: "product", populate: { path: "brand" } });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error updating cart by Id" });
    }
  },
  
  getCartByUserId: async (req, res) => {
    try{
      let { id } = req.params;
      let result = await Cart.findById({user:id}).populate({path:"product" ,populate :{path:"brand"}});
      res.status(200).json(result);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error getting cart items by user id"});
    }
  },

  deleteCartByUserId: async (req, res) => {
    try {
      let { id } = req.params;
      let result = await Cart.deleteMany({ user: id });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error occured while delete user's cart" });
    }
  },

  deleteCartById: async (req, res) => {
    try {
      let { id } = req.params;
      let result = await Cart.findByIdAndDelete(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error deleting cart items" });
    }
  },
};

export default cartController;

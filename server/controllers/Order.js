import Order from "../models/orderModel.js";

const orderController = {
  createOrder: async (req, res) => {
    try {
      let create = await new Order(req.body);
      await create.save();
      res.status(200).json(create);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: " Error while creating order" });
    }
  },

  updateOrderById: async (req, res) => {
    try {
      let { id } = req.params;
      let result = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: " Error while updating order" });
    }
  },

  getOderByUserId: async (req, res) => {
    try {
      let { id } = req.params;
      let result = await Order.find({ user: id });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: " Error while getting user's order" });
    }
  },

  getAll: async (req, res) => {
    try {
      let skip = 0,
        limit = 0;

      if (req.query.page && req.query.limit) {
        let pageSize = req.query.limit;
        let page = req.query.page;
        skip = pageSize * (page - 1);
        limit = pageSize;
      }

      const [totalDocs, result] = await Promise.all([
        await Order.find({}).countDocuments().exec(),
        await Order.find({}).skip(skip).limit(limit).exec(),
      ]);

      res.header("X-total-count", totalDocs);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: " Error while getting order" });
    }
  },
};

export default orderController;

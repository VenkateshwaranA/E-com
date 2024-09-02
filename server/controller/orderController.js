const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    const { products, totalPrice } = req.body;
   
    if (!products || products.length === 0) {
        return res.status(400).json({ message: 'No order items' });
    }

    const order = new Order({
        user: req.user._id,
        products,
        totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
};

exports.getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
};

exports.getAllOrders = async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id username');
    res.json(orders);
};
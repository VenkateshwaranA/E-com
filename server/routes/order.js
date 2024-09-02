const express = require('express');
const { placeOrder, getMyOrders, getAllOrders } = require('../controller/orderController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, placeOrder);
router.get('/myorders', protect, getMyOrders);
router.get('/', protect, admin, getAllOrders);

module.exports = router;

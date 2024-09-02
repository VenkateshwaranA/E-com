const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({
 
}));

// Routes
const authRoutes = require("./routes/auth");
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');

app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {console.log("db connected")
  })
  .catch((error) => console.log(error.message));

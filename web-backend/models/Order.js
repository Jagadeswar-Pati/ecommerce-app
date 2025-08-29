const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, default: 1 },
      }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    address: { type: String, required: true },
    paymentMethod: { type: String, default: "COD" }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

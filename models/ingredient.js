
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },          // spice, vegetable, meat
    calories: { type: Number, required: true },
    unit: { type: String, required: true },          //  grams, ml, piece
    price: { type: Number, required: true },
    brand: { type: String, default: "" },            // optional
    allergens: { type: String, default: "" }         // optional, "nuts, dairy"
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);

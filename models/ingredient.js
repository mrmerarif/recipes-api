// models/ingredient.js
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., spice, vegetable, meat
    calories: { type: Number, required: true },
    unit: { type: String, required: true }, // e.g., grams, ml, piece
    price: { type: Number, required: true },
    brand: { type: String },
    allergens: { type: String } // e.g., "nuts, dairy"
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);

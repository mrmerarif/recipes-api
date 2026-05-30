
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },                 // recipe title
    description: { type: String, required: true },           // short description
    ingredients: [{ type: String, required: true }],         // list of ingredient names or IDs
    instructions: { type: String, required: true },          // full instructions
    prepTime: { type: Number, required: true },              // minutes
    cookTime: { type: Number, required: true },              // minutes
    servings: { type: Number, required: true },              // number of servings
    category: { type: String, required: true },              // e.g., Dessert, Dinner, etc.
    imageUrl: { type: String, default: "" }                  // optional image
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);

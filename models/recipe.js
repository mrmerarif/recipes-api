// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }], // This will require the simple list of ingredient names or IDs
    instructions: { type: String, required: true },
    prepTime: { type: Number, required: true }, // in minutes
    cookTime: { type: Number, required: true }, // in minutes
    servings: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String } // optional
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);

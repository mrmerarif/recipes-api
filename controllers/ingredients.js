// controllers/ingredients.js
const Ingredient = require('../models/ingredient');

// GET all ingredients
const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ingredient by ID
const getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }
    res.status(200).json(ingredient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create ingredient
const createIngredient = async (req, res) => {
  try {
    const { name, type, calories, unit, price, brand, allergens } = req.body;

    if (!name || !type || calories == null || !unit || price == null) {
      return res.status(400).json({ message: 'Missing required ingredient fields' });
    }

    const ingredient = new Ingredient({
      name,
      type,
      calories,
      unit,
      price,
      brand,
      allergens
    });

    const saved = await ingredient.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update ingredient
const updateIngredient = async (req, res) => {
  try {
    const { name, type, calories, unit, price, brand, allergens } = req.body;

    if (!name || !type || calories == null || !unit || price == null) {
      return res.status(400).json({ message: 'Missing required ingredient fields' });
    }

    const updated = await Ingredient.findByIdAndUpdate(
      req.params.id,
      { name, type, calories, unit, price, brand, allergens },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE ingredient
const deleteIngredient = async (req, res) => {
  try {
    const deleted = await Ingredient.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient
};

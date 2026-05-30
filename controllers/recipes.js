// controllers/recipes.js
const Recipe = require('../models/recipe');

// GET all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create recipe
const createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      servings,
      category,
      imageUrl
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !description ||
      !ingredients ||
      !Array.isArray(ingredients) ||
      ingredients.length === 0 ||
      !instructions ||
      prepTime == null ||
      cookTime == null ||
      servings == null ||
      !category
    ) {
      return res.status(400).json({ message: 'Missing required recipe fields' });
    }

    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      servings,
      category,
      imageUrl: imageUrl || "" // default if missing
    });

    const saved = await recipe.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update recipe
const updateRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      servings,
      category,
      imageUrl
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !description ||
      !ingredients ||
      !Array.isArray(ingredients) ||
      ingredients.length === 0 ||
      !instructions ||
      prepTime == null ||
      cookTime == null ||
      servings == null ||
      !category
    ) {
      return res.status(400).json({ message: 'Missing required recipe fields' });
    }

    const updated = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        ingredients,
        instructions,
        prepTime,
        cookTime,
        servings,
        category,
        imageUrl: imageUrl || ""
      },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE recipe
const deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
};

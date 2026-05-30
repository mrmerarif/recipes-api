// routes/recipes.js
const express = require('express');
const router = express.Router();

const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipes');

/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Recipe management
 */

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: Get all recipes
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: Successfully retrieved all recipes
 */
router.get('/', getAllRecipes);

/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Get a recipe by ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved recipe
 *       404:
 *         description: Recipe not found
 */
router.get('/:id', getRecipeById);

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               ingredients: { type: array, items: { type: string } }
 *               instructions: { type: string }
 *               prepTime: { type: number }
 *               cookTime: { type: number }
 *               servings: { type: number }
 *               category: { type: string }
 *               imageUrl: { type: string }
 *     responses:
 *       201:
 *         description: Recipe created
 *       400:
 *         description: Missing required fields
 */
router.post('/', createRecipe);

/**
 * @swagger
 * /recipes/{id}:
 *   put:
 *     summary: Update a recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               ingredients: { type: array, items: { type: string } }
 *               instructions: { type: string }
 *               prepTime: { type: number }
 *               cookTime: { type: number }
 *               servings: { type: number }
 *               category: { type: string }
 *               imageUrl: { type: string }
 *     responses:
 *       200:
 *         description: Recipe updated
 *       400:
 *         description: Invalid data
 *       404:
 *         description: Recipe not found
 */
router.put('/:id', updateRecipe);

/**
 * @swagger
 * /recipes/{id}:
 *   delete:
 *     summary: Delete a recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Recipe deleted
 *       404:
 *         description: Recipe not found
 */
router.delete('/:id', deleteRecipe);

module.exports = router;

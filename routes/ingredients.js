// routes/ingredients.js
const express = require('express');
const router = express.Router();

const {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient
} = require('../controllers/ingredients');

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: Ingredient management
 */

/**
 * @swagger
 * /ingredients:
 *   get:
 *     summary: Get all ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: Successfully retrieved all ingredients
 */
router.get('/', getAllIngredients);

/**
 * @swagger
 * /ingredients/{id}:
 *   get:
 *     summary: Get an ingredient by ID
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved ingredient
 *       404:
 *         description: Ingredient not found
 */
router.get('/:id', getIngredientById);

/**
 * @swagger
 * /ingredients:
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               type: { type: string }
 *               calories: { type: number }
 *               unit: { type: string }
 *               price: { type: number }
 *               brand: { type: string }
 *               allergens: { type: string }
 *     responses:
 *       201:
 *         description: Ingredient created
 *       400:
 *         description: Missing required fields
 */
router.post('/', createIngredient);

/**
 * @swagger
 * /ingredients/{id}:
 *   put:
 *     summary: Update an ingredient
 *     tags: [Ingredients]
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
 *               name: { type: string }
 *               type: { type: string }
 *               calories: { type: number }
 *               unit: { type: string }
 *               price: { type: number }
 *               brand: { type: string }
 *               allergens: { type: string }
 *     responses:
 *       200:
 *         description: Ingredient updated
 *       400:
 *         description: Invalid data
 *       404:
 *         description: Ingredient not found
 */
router.put('/:id', updateIngredient);

/**
 * @swagger
 * /ingredients/{id}:
 *   delete:
 *     summary: Delete an ingredient
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Ingredient deleted
 *       404:
 *         description: Ingredient not found
 */
router.delete('/:id', deleteIngredient);

module.exports = router;

const router = require("express").Router();
const Category = require("../models/Category");

// Post new category
router.post('/', async (req, res) => {
    const newCategory = new Category(req.body)
    try {
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch(err) {
        res.status(200).json(err)
    }
})

// Get all categories
router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.find()
        res.status(200).json(allCategories)
    } catch(err) {
        res.status(200).json(err)
    }
})

module.exports = router;

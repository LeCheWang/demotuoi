const categoryModel = require('../models/category.model');

module.exports = {
  createCategory: async (req, res, next) => {
    const body = req.body;
    const newCategory = await categoryModel.create(body);
    return res.status(201).json(newCategory);
  },
  getCategories: async (req, res, next) => {
    const categories = await categoryModel.find();
    return res.status(200).json(categories);
  },
  updateCategory: async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    const categoryUpdated = await categoryModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(categoryUpdated);
  },
  deleteCategory: async (req, res, next) => {
    const id = req.params.id;
    const categoryDeleted = await categoryModel.findByIdAndDelete(id);
    return res.status(200).json(categoryDeleted);
  },
};

import express from 'express';
import { categoryController } from './categories.controller';

const router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.patch('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

export const categoryRoute = router;

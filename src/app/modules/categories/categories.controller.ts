import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { categoryService } from './categories.service';

const createCategory = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await categoryService.createCategory(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getCategories = catchAsync(async (req, res) => {
  const result = await categoryService.getCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched successfully',
    data: result,
  });
});
const getCategoryById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await categoryService.getCategoryById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await categoryService.updateCategory(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await categoryService.deleteCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const categoryController = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};

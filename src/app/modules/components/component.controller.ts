import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { componentService } from './component.service';

const createComponent = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await componentService.createComponent(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Component created successfully',
    data: result,
  });
});
const getAllComponents = catchAsync(async (req, res) => {
  const result = await componentService.getComponents();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Components fetched successfully',
    data: result,
  });
});
const getComponentById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await componentService.getComponentById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single component fetched successfully',
    data: result,
  });
});

const updateComponent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await componentService.updateComponent(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Component updated successfully',
    data: result,
  });
});

const deleteComponent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await componentService.deleteComponents(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Component deleted successfully',
    data: result,
  });
});

export const componentController = {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponent,
  deleteComponent,
};

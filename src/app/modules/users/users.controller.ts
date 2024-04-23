import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './users.service';

const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await UserService.createUser(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const userController = {
  createUser,
};

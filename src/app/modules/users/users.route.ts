import express from 'express';
import { userController } from './users.controller';
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getSingleUser);

export const userRoutes = router;

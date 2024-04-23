import express from 'express';
import { componentController } from './component.controller';

const router = express.Router();

router.post('/', componentController.createComponent);

router.get('/', componentController.getAllComponents);

router.get('/:id', componentController.getComponentById);

router.patch('/:id', componentController.updateComponent);

router.delete('/:id', componentController.deleteComponent);

export const componentRoute = router;

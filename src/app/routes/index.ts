import express from 'express';
import { categoryRoute } from '../modules/categories/categories.route';
import { componentRoute } from '../modules/components/component.route';
import { userRoutes } from '../modules/users/users.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    routes: userRoutes,
  },
  {
    path: '/category',
    routes: categoryRoute,
  },
  {
    path: '/components',
    routes: componentRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

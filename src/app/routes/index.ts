import express from 'express';
import { categoryRoute } from '../modules/categories/categories.route';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

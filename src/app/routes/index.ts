import express from 'express';
import { userRoutes } from '../modules/users/users.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    routes: userRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

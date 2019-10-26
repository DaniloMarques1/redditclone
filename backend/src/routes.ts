import { Router } from 'express';
import UserController from './controllers/UserController';
import CategoryController from './controllers/CategoryController';

const routes = Router();

//USER
routes.get('/user', UserController.index);
routes.post('/user', UserController.auth);
routes.post('/user/new', UserController.store);
routes.put('/user', UserController.update);

//CATEGORIES
routes.post('/category', CategoryController.store); // nao sera acessivel
routes.get('/category', CategoryController.index);

export default routes;
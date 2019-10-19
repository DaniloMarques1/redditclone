import { Router } from 'express';
import UserController from './controllers/UserController';


const routes = Router();

routes.post('/user', UserController.auth);
routes.post('/user/new', UserController.store);

export default routes;
import { Router } from 'express';
import UserController from './controllers/UserController';


const routes = Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.auth);
routes.post('/user/new', UserController.store);
routes.put('/user', UserController.update);

export default routes;
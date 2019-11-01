import { Router } from 'express';
import UserController from './controllers/UserController';
import CategoryController from './controllers/CategoryController';
import PostController from './controllers/PostController';
import CommentController from './controllers/CommentController';
import SearchController from './controllers/SearchController';

const routes = Router();

//USER
routes.get('/user', UserController.index);
routes.post('/user', UserController.auth);
routes.post('/user/new', UserController.store);
routes.put('/user', UserController.update);

//CATEGORIES
routes.post('/category', CategoryController.store); // nao sera acessivel
routes.get('/category', CategoryController.index);

//POSTS
routes.post('/post/new', PostController.store);
routes.get('/post', PostController.index);
routes.delete('/post/:id', PostController.destroy);
routes.get('/post/:id', PostController.show);
// routes.get('/search/post/title', PostController.getPostFromTitle);
// routes.get('/search/post/category', PostController.getPostFromCategory);


//FILTER/SEARCH
routes.get('/search/post/title', SearchController.getPostFromTitle);
routes.get('/search/post/category', SearchController.getPostFromCategory);

//COMMENTS
routes.post('/post/:id/comment', CommentController.store);

export default routes;
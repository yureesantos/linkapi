import { Router } from 'express';
import DealsController from './app/controllers/DealsController';

const routes = new Router();

routes.get('/deals', DealsController.index);
routes.post('/bling', DealsController.bling);

export default routes;

import { Router } from 'express';
import DealsController from './app/controllers/DealsController';

const routes = new Router();

routes.get('/deals', DealsController.index);
routes.get('/opportunities', DealsController.show);

export default routes;

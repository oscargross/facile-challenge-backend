import { Router } from 'express';
import routerApp from './routes';

const routes = Router();
 
routes.use('/', routerApp);

export default routes;

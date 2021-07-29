import { Router } from 'express';
import routerApp from './routes';

const routes = Router();
 
routes.use('/encripts', routerApp);

export default routes;

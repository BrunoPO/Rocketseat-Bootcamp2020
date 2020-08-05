import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsConstroller from './controllers/ConnectionsConstroller';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsConstroller = new ConnectionsConstroller();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsConstroller.index);
routes.post('/connections', connectionsConstroller.create);

export default routes;

import express from 'express';
import { getUsers } from '../controllers/userController.js';

const routes = express.Router();

routes.get( '/users', getUsers );

export default routes;
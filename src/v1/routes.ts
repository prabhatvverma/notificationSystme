import { Router } from 'express';
import moment from 'moment';
const routes = Router();
import UsersController from './controllers/usersController';
const nameSpace = `/v1/`;
/*---------------------------------------------------------------------------------
 Define All the Routes Below. The routes will follow REST API standards strictly.
 ---------------------------------------------------------------------------------*/
routes.get('/', (req, res) => {
  const port = process.env.PORT ?? 3001;
  res.send(
    `The Express Application is running on this Server. Server DateTime: ${moment().format(
      'MMMM Do YYYY, h:mm:ss a z'
    )} <br><br> Swagger is running on <a href="http://localhost:${port}/api-docs">http://localhost:${port}/api-docs</a>`
  );
});
// Authentication
routes.get(`${nameSpace}signUp`, UsersController.get);

export default routes;

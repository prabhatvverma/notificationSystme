import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import * as path from 'path';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from '../swagger/swaggerDefinition';
import { default as routesV1 } from './v1/routes';

dotenv.config();
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

// Extended: https://swagger.io/specification/#infoObject
let swaggerOptions = {
  swaggerDefinition,
  apis: ['.v1/routes.js'],
};

app.use('/api', routesV1); // Assigning Defined Routes

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () =>
  console.log(`API services application listening at http://localhost:${port}`)
);

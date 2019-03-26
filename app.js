import express from 'express';
import dotenv from 'dotenv';
import middlewares from './middlewares';
import routes from './routes';
import './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
middlewares(app, dotenv);

// Routes
routes(app);

app.listen(PORT, () => {
  console.log(`✅  Server running on ${PORT}port`);
});

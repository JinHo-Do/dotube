import express from 'express';
import middlewares from './middlewares';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
middlewares(app);

// Routes
routes(app);

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}port`);
});

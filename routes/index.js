import routes from './routes';
import globalRouter from './global';
import userRouter from './user';

export default (app) => {
  app.use(routes.home, globalRouter);
  app.use(routes.users, userRouter);
};

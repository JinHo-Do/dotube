import routes from './routes';
import globalRouter from './global';
import userRouter from './user';
import videoRouter from './video';

export default (app) => {
  app.use(routes.home, globalRouter);
  app.use(routes.users, userRouter);
  app.use(routes.videos, videoRouter);

  // 404 handling
  app.use((req, res) => {
    res.status(404);
    res.render('error');
  });
};

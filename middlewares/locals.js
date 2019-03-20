import routes from '../routes/routes';

export default (req, res, next) => {
  res.locals.siteName = 'DoTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

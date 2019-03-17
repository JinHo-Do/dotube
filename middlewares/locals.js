import routes from '../routes/routes';

export default (req, res, next) => {
  res.locals.siteName = 'DoTube';
  res.locals.routes = routes;
  next();
};

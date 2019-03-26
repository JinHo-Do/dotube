import routes from '../routes/routes';

export default (req, res, next) => {
  res.locals.siteName = 'DoTube';
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log('req.user: ', req.user);
  next();
};

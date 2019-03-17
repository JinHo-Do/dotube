import { Router } from 'express';

const globalRouter = Router();

globalRouter.get('/', (res, req) => {
  req.send('this is Home page');
});

export default globalRouter;

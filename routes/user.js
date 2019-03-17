import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (res, req) => {
  req.send('user page');
});

export default userRouter;

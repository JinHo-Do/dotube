import express from 'express';
import path from 'path';
import multer from 'multer';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import localsMiddleware from './locals';
import './passport';

export const uploadVideo = multer({ dest: 'uploads/videos/' }).single(
  'videoFile',
);

export default (app, dotenv) => {
  dotenv.config();

  app.set('view engine', 'pug');

  app.use(helmet());
  app.use(logger('dev'));

  // TODO: Change AWS S3
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  app.use('/static', express.static(path.join(__dirname, '../static')));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(localsMiddleware);
};

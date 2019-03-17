import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

export default (app) => {
  app.use(helmet());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};

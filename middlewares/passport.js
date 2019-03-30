import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';
import routes from '../routes/routes';

import User from '../models/user';

dotenv.config();

passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}${
        routes.githubCallback
      }`,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const {
        _json: { id, avatar_url: avtarUrl, name, email },
      } = profile;

      try {
        const user = await User.findOne({ email });
        if (user) {
          user.githubId = id;
          user.avtarUrl = avtarUrl;
          await user.save();
          return cb(null, user);
        }
        const newUser = await User.create({
          email,
          name,
          githubId: id,
          avtarUrl,
        });

        return cb(null, newUser);
      } catch (error) {
        return cb(error);
      }
    },
  ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

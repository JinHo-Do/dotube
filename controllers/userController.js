import passport from 'passport';
import routes from '../routes/routes';
import User from '../models/user';

export const getJoin = (req, res) => {
  res.render('Join', {
    pageTitle: 'Join',
  });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, verifyPassword },
  } = req;

  if (password !== verifyPassword) {
    res.status(400);
    res.render('Join', {
      pageTitle: 'Join',
    });
  } else {
    try {
      const user = await User({ name, email });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log('error: ', error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render('Login', {
    pageTitle: 'Log In',
  });
};

export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  // TODO: User Log Out
  res.redirect(routes.home);
};

export const userDetail = (req, res) => {
  res.render('userDetail', {
    pageTitle: 'User Detail',
  });
};

export const editProfile = (req, res) => {
  res.render('editProfile', {
    pageTitle: 'Edit Profile',
  });
};

export const changePassword = (req, res) => {
  res.render('changePassword', {
    pageTitle: 'Change Password',
  });
};

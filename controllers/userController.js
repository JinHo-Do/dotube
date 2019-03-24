import routes from '../routes/routes';

export const getJoin = (req, res) => {
  res.render('Join', {
    pageTitle: 'Join',
  });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, verifyPassword },
  } = req;

  if (password !== verifyPassword) {
    res.status(400);
    res.render('Join', {
      pageTitle: 'Join',
    });
  } else {
    // TODO: Register User
    // TODO: User Log In
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render('Login', {
    pageTitle: 'Log In',
  });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

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

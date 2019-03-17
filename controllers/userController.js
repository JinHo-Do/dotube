export const join = (req, res) => {
  res.render('Join', {
    pageTitle: 'Join',
  });
};

export const login = (req, res) => {
  res.render('Login', {
    pageTitle: 'Log In',
  });
};

export const logout = (req, res) => {
  res.render('Logout', {
    pageTitle: 'Log Out',
  });
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

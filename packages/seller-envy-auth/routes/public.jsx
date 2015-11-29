publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Signup /> } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Login /> } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.RecoverPassword /> } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.ResetPassword /> } );
  }
});

// invites
publicRoutes.route('/invite/:token', {
  name: 'invite',
  action() {
    ReactLayout.render(SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Invite /> });
  }
});
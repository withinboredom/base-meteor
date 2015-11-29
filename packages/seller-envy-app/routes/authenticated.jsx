authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Index /> } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Dashboard /> } );
  }
});

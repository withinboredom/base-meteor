const authenticatedRedirect = () => {
  if (Meteor.isServer) {
    FlowRouter.go('login');
  }
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

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

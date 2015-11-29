const blockUnauthorizedAdmins = (context, redirect) => {
  if (Meteor.user() && !Roles.userIsInRole(Meteor.user(), 'admin')) {
    FlowRouter.go('login');
  }
};

authenticatedRoutes.route('/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmins ],
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Users /> });
  }
});

authenticatedRoutes.route('/managers', {
  name: 'managers',
  triggersEnter: [ blockUnauthorizedAdmins ],
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Managers /> });
  }
});

authenticatedRoutes.route('/employees', {
  name: 'employees',
  triggersEnter: [ blockUnauthorizedAdmins ],
  action() {
    ReactLayout.render( SellerEnvy.Views.Default, { yield: <SellerEnvy.Views.Employees /> });
  }
});
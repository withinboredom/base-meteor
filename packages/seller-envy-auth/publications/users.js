Meteor.publish('users', () => {
  let isAdmin = Roles.userIsInRole(Meteor.user(), 'admin');

  if (isAdmin) {
    return [
      Meteor.users.find({}, {fields: {'emails.address': 1, 'roles': 1}}),
      SellerEnvy.Collection.Invitation.find({}, {fields: {'email': 1, 'role': 1, 'date': 1}})
    ];
  }
  else {
    return null;
  }
});
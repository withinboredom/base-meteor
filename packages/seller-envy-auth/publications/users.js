Meteor.publish('users', function() {

  if (!this.userId) {
    this.ready();
  }

  let isAdmin = Roles.userIsInRole(this.userId, 'admin');

  console.log('continuing anyway');
  if (isAdmin) {
    return [
      Meteor.users.find({}, { fields: {'emails.address': 1, 'roles': 1}}),
      SellerEnvy.Collection.Invitation.find({}, { fields: {'email': 1, 'role': 1, 'date': 1}})
    ];
  }
  else {
    return null;
  }
});

Meteor.publish('invite', (token) => {
  check(token, String);
  return SellerEnvy.Collection.Invitation.find({'token': token});
});
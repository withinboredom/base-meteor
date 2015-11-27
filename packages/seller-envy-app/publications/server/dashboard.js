Meteor.publish( 'dashboard', function() {
  return SellerEnvy.Collection.People.find();
});
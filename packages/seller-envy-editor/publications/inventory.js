Meteor.publish('inventory', function() {
  return SellerEnvy.Collection.Inventory.Inventory.find();
});
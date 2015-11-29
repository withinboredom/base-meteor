Inventory = new Meteor.Collection('inventory');

Inventory.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Inventory.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let InventorySchema = new SimpleSchema({

});
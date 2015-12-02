Conditions = new Meteor.Collection('inventoryConditions');

Conditions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Conditions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

ConditionsSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of this condition'
  },
  description: {
    type: String,
    label: 'The description of this condition'
  }
});

Conditions.attachSchema(ConditionsSchema);

SellerEnvy.Collection.Inventory.Condition = Conditions;
ProductIDTypes = new Meteor.Collection('productTypes');

ProductIDTypes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

ProductIDTypes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let IDTypesSchema = new SimpleSchema({
  idType: {
    type: String,
    label: 'The type of id this is'
  },
  tenant: {
    type: String,
    label: 'The tenant this type belongs to'
  }
});

ProductIDTypes.attachSchema(IDTypesSchema);

Tenantify.collection(ProductIDTypes, {
  tenantField: 'tenant'
});

SellerEnvy.Collection.Inventory.ProductIDType = ProductIDTypes;
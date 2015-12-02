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
  title: {
    type: String,
    label: 'The name of the product'
  },
  productId: {
    type: String,
    label: 'The unique identifier of the product sku'
  },
  productIDType: {
    type: String,
    label: 'An id of the type of identifier used'
  },
  quantity: {
    type: Number,
    label: 'The quantity of this sku available at this location, in this condition'
  },
  condition: {
    type: String,
    label: 'The condition of this item'
  },
  comments: {
    type: String,
    label: 'Freeform comments about this item'
  },
  cost: {
    type: Number,
    label: 'The cost to aquire this item'
  },
  tags: {
    type: String,
    label: 'An array of tags to help locate this item'
  },
  location: {
    type: String,
    label: 'The location of this item (ID)'
  },
  pictureUrl: {
    type: String,
    label: 'The url for this picture'
  },
  asin: {
    type: String,
    label: 'The asin for this item (if stored on Amazon)'
  },
  sku: {
    type: String,
    label: 'The internal sku for this item'
  },
  salePrice: {
    type: Number,
    label: 'The amount to sell this item for',
    min: 0
  },
  productCategory: {
    type: String,
    label: 'The category of this item'
  },
  tenant: {
    type: String,
    label: 'The tenant this item belongs to'
  }
});

Inventory.attachSchema(InventorySchema);

Tenantify.collection(Inventory, {
  tenantField: 'tenant'
});

SellerEnvy.Collection.Inventory.Inventory = Inventory;
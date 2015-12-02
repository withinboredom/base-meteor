Tenants = new Meteor.Collection('tenants');

Tenants.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Tenants.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

TenantsSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the tenant'
  },
  subdomain: {
    type: String,
    label: 'The subdomain for the tenant'
  },
  poc: {
    type: String,
    label: 'Point of contact for this tenant'
  }
});

Tenants.attachSchema(TenantsSchema);

SellerEnvy.Collection.Tenant = Tenants;
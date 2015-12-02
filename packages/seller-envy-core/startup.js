Tenantify.setTenantCollection(SellerEnvy.Collection.Tenant, '_id');

Meteor.startup(() => {
  SellerEnvy.Modules.both.startup();
});
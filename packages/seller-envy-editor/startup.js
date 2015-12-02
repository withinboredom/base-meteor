let idTypesDoNotExist = function(home) {
  return SellerEnvy.Collection.Inventory.ProductIDType.find({idType: 'ASIN', tenant: home}).count() == 0;
};

let createIDTypes = function(home) {
  if (idTypesDoNotExist(home)) {
    console.log('Injecting id types');

    SellerEnvy.Collection.Inventory.ProductIDType.insert({
      idType: 'EAN',
      tenant: home
    });

    SellerEnvy.Collection.Inventory.ProductIDType.insert({
      idType: 'ISBN',
      tenant: home
    });

    SellerEnvy.Collection.Inventory.ProductIDType.insert({
      idType: 'UPC',
      tenant: home
    });

    SellerEnvy.Collection.Inventory.ProductIDType.insert({
      idType: 'ASIN',
      tenant: home
    });
  }
};

let conditionsDoNotExist = function() {
  return SellerEnvy.Collection.Inventory.Condition.find({title: 'New'}).count() == 0;
};

let createConditions = function() {
  if (conditionsDoNotExist()) {
    console.log('Injecting conditions');

    SellerEnvy.Collection.Inventory.Condition.insert({
      title: 'Used - Like New',
      description: 'Very gently used, possibly just from the store'
    });

    SellerEnvy.Collection.Inventory.Condition.insert({
      title: 'Used - Very Good',
      description: 'Very good condition'
    });

    SellerEnvy.Collection.Inventory.Condition.insert({
      title: 'Used - Good',
      description: 'Good condition'
    });

    SellerEnvy.Collection.Inventory.Condition.insert({
      title: 'Used - Acceptable',
      description: 'Acceptable'
    });

    SellerEnvy.Collection.Inventory.Condition.insert({
      title: 'New',
      description: 'Straight from the manufacturer'
    });
  }
};

let tenantDoesNotExist = function() {
  return SellerEnvy.Collection.Tenant.find().count() == 0;
};

let createTenant = function() {
  if (tenantDoesNotExist()) {
    console.log('creating master tenant');
    SellerEnvy.Collection.Tenant.insert({
      name: 'sellerEnvy',
      poc: 'landers.robert@gmail',
      subdomain: 'sellerEnvy'
    });
  }

  let home = SellerEnvy.Collection.Tenant.findOne({subdomain: 'sellerEnvy'});

  return home;
};

Meteor.startup(function() {
  console.log('Starting Inventory system');
  let home = createTenant();
  console.log('using tenant id: ' + home._id);
  createIDTypes(home._id);
  createConditions(home._id);
});
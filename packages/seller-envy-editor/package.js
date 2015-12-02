Package.describe({
  name: "seller-envy:editor",
  summary: "Inventory editor for seller envy",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.1");

  var packages = [
    'seller-envy:core@0.0.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'define.js',

    'collections/inventory.js',
    'collections/conditions.js',
    'collections/productIDTypes.js',

    'components/inventory.jsx',
    'components/inventory-add.jsx',
    'components/inventory-detail.jsx',
    'components/inventorySearch.jsx',

    'routes/authenticated.jsx',

    'startup.js'
  ], ['client', 'server']);

  api.addFiles([
    'publications/inventory.js'
  ], ['server']);
});
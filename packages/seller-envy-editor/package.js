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
    'components/inventory-search.jsx',
    'components/inventory-list.jsx',
    'components/inventory-list-item.jsx',

    'routes/authenticated.jsx',
  ], ['client', 'server']);

  api.addFiles([
    'publications/inventory.js',
    'startup.js'
  ], ['server']);
});
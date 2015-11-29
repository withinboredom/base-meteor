Package.describe({
  name: "seller-envy:editor",
  summary: "Inventory editor for seller envy",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  var packages = [
    'seller-envy:core@0.0.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
  ], ['client', 'server']);

  api.addFiles([
  ], ['server']);
});
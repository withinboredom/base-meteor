Package.describe({
  name: "seller-envy:people",
  summary: "People package for seller envy",
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
    'collections/people.js'
  ], ['client', 'server']);

  api.addFiles([
    'components/client/people-table.jsx',
    'components/client/person.jsx'
  ], ['client', 'server']);

  api.addFiles([
    'modules/server/generate-people.js',

    'modules/server/startup.js'
  ], ['server']);
});
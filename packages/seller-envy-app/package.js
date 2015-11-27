Package.describe({
  name: "seller-envy:app",
  summary: "Seller Envy",
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
    'routes/authenticated.jsx',
    'routes/configure.jsx',
    'routes/public.jsx'
  ], ['client', 'server']);

  api.addFiles([
    'components/client/authenticated/dashboard.jsx',
    'components/client/authenticated/index.jsx',
    'components/client/globals/authenticated-navigation.jsx',
    'components/client/globals/header.jsx',
    'components/client/globals/loading.jsx',
    'components/client/globals/not-found.jsx',
    'components/client/globals/public-navigation.jsx'
  ], ['client', 'server']);

  api.addFiles([
    'publications/server/dashboard.js',
    'publications/server/template.js'
  ], ['server']);

  api.export([
    'publicRoutes',
    'authenticatedRoutes'
  ]);
});
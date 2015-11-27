Package.describe({
  name: "seller-envy:core",
  summary: "Core for Seller Envy",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  var packages = [
    'seller-envy:lib@0.0.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    // module setup
    'modules/both/core.js',
    'modules/both/startup.js',

    // startup before anything else
    'startup.js'
  ], ['client', 'server']);

  api.addFiles([
    // module setup
    'modules/client/core.js',

    // helpers
    'helpers/flow-router.js',
    'helpers/template.js',

    // components
    'components/layouts/default.jsx',

    // stylesheets
    'stylesheets/tools/_extends.scss',
    'stylesheets/objects/_forms.scss',
    'stylesheets/components/_login.scss',
    'stylesheets/application.scss'
  ], ['client', 'server']);

  api.addFiles([
    // module setup
    'modules/server/core.js'
  ], ['server']);

  api.export([
    'FlowHelpers'
  ]);
});
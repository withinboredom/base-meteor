Package.describe({
  name: "seller-envy:core",
  summary: "Core for Seller Envy",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.1");

  var packages = [
    'seller-envy:lib@0.0.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'collections/tenants.js',

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

    'components/library/layout.jsx',
    'components/library/masterbar.jsx',
    'components/library/masterbarLoggedOutMenu.jsx',
    'components/library/masterbarSectionMenu.jsx',
    'components/library/noticesList.jsx',
    'components/library/pulsingDot.jsx',
    'components/library/welcome.jsx',
    'components/library/welcomeMessage.jsx',

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
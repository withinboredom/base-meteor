Package.describe({
  name: "seller-envy:auth",
  summary: "Authentication for seller envy",
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
    // modules
    'modules/client/login.js',
    'modules/client/recover-password.js',
    'modules/client/reset-password.js',
    'modules/client/signup.js',
    'modules/client/startup.js',

    // components
    'components/client/login.jsx',
    'components/client/recover-password.jsx',
    'components/client/reset-password.jsx',
    'components/client/signup.jsx'
  ], ['client', 'server']);

  api.addFiles([
    'admin/server/reset-password.js',
    'modules/server/generate-account.js',

    'modules/server/startup.js'
  ], ['server']);
});
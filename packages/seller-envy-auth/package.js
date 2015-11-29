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
    'collections/users.js',
    'collections/invitations.js',

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
    'components/client/signup.jsx',
    'components/client/employees.jsx',
    'components/client/managers.jsx',
    'components/client/user-edit.jsx',
    'components/client/users.jsx',
    'components/client/invite-edit.jsx',
    'components/client/send-invitation-modal.jsx',

    'routes/authenticated.jsx',
    'routes/public.jsx',

    'methods/users.js'
  ], ['client', 'server']);

  api.addFiles([
    'admin/server/reset-password.js',
    'modules/server/generate-account.js',
    'modules/server/send-invitation.jsx',

    'components/templates/invite.jsx',

    'modules/server/startup.js',
    'publications/users.js'
  ], ['server']);
});
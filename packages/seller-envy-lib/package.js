Package.describe({
  name: "seller-envy:lib",
  summary: "Core Components",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.0']);

  var packages = [
    'accounts-base',
    'accounts-password',
    'aldeed:collection2',
    'audit-argument-checks',
    'browser-policy',
    'check',
    'digilord:faker',
    'ecmascript',
    'fourseven:scss',
    'jquery',
    'kadira:flow-router',
    'kadira:react-layout',
    'meteor-base',
    'meteorhacks:fast-render',
    'meteorhacks:npm',
    'meteorhacks:ssr',
    'npm-container',
    'react',
    'reactive-dict',
    'reactive-var',
    'session',
    'standard-minifiers',
    'stevezhu:lodash',
    'themeteorchef:bert',
    'themeteorchef:jquery-validation',
    'tracker',
    'twbs:bootstrap'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'both/modules/define.js'
  ],['client', 'server']);

  api.export([
    'SellerEnvy'
  ]);
});
Package.describe({
  name: "seller-envy:lib",
  summary: "Core Components",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.0']);

  /*
   accounts-base                    1.2.2  A user account system
   accounts-password                1.1.4  Password support for accounts
   aldeed:collection2               2.5.0  Automatic validation of insert and update operations on the client and server.
   audit-argument-checks            1.0.4  Try to detect inadequate input sanitization
   browser-policy                   1.0.5  Configure security policies enforced by the browser
   check                            1.1.0  Check whether a value matches a pattern
   digilord:faker                   1.0.7  Faker.js packaged for Meteor. Generate massive amounts of fake data
   ecmascript                       0.1.6  Compiler plugin that supports ES2015+ in all .js files
   fourseven:scss                   3.4.1  Style with attitude. Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).
   jquery                           1.11.4  Manipulate the DOM using CSS selectors
   kadira:blaze-layout              2.3.0  Layout Manager for Blaze (works well with FlowRouter)
   kadira:flow-router               2.10.0  Carefully Designed Client Side Router for Meteor
   kadira:react-layout              1.5.2  Layout Manager for React with SSR Support
   meteor-base                      1.0.1  Packages that every Meteor app needs
   meteorhacks:fast-render          2.10.0  Render your app before the DDP connection even comes alive - magic?
   meteorhacks:npm                  1.5.0  Use npm modules with your Meteor App
   meteorhacks:ssr                  2.2.0  Server Side Rendering for Meteor with Blaze
   npm-container                    1.2.0+ Contains all your npm dependencies
   react                            0.14.1_1  Everything you need to use React with Meteor.
   reactive-dict                    1.1.3  Reactive dictionary
   reactive-var                     1.0.6  Reactive variable
   session                          1.1.1  Session variable
   standard-minifiers               1.0.2  Standard minifiers used with Meteor apps by default.
   stevezhu:lodash                  3.10.1  A utility library delivering consistency, customization, performance, & extras.
   templating                       1.1.5  Allows templates to be defined in .html files
   themeteorchef:bert               2.1.0  A client side, multi-style alerts system for Meteor.
   themeteorchef:jquery-validation  1.14.0  jQuery Validation by jzaefferer, repackaged for Meteor.
   tracker                          1.0.9  Dependency tracker to allow reactive callbacks
   twbs:bootstrap                   3.3.6  The most popular front-end framework for developing responsive, mobile first projects on the web.
   */

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
    'kadira:flow-router-ssr',
    'kadira:dochead',
    'kadira:react-layout',
    'meteor-base',
    'meteorhacks:npm',
    'npm-container',
    'react',
    'reactive-dict',
    'reactive-var',
    'session',
    'standard-minifiers',
    'stevezhu:lodash',
    'templating',
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
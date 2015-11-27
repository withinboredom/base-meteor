let startup = () => {
  SellerEnvy.Modules.server.setEnvironmentVariables();
};

Meteor.startup(startup);
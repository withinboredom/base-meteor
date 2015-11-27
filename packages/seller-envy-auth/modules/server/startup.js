let startup = () => {
  SellerEnvy.Modules.server.generateAccounts();
};

Meteor.startup(startup);
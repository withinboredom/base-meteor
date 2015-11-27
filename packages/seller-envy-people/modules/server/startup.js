let startup = () => {
  SellerEnvy.Modules.server.generatePeople();
};

Meteor.startup(startup);
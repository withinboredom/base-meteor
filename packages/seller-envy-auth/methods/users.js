Meteor.methods({
  setRoleOnUser(options) {
    check(options, {
      user: Object,
      role: String
    });

    try {
      Roles.setUserRoles(options.user, options.role);
    }
    catch (ex) {
      return ex;
    }
  },
  revokeInvitation(invite) {
    check(invite, Object);

    try {
      SellerEnvy.Collection.Invitation.remove(invite);
    }
    catch (ex) {
      return ex;
    }
  },
  sendInvite(invitation) {
    check(invitation, {
      email: String,
      role: String
    });

    this.unblock();
    try {
      SellerEnvy.Modules.server.sendInvitation({
        email: invitation.email,
        token: Random.hexString(16),
        role: invitation.role,
        date: (new Date()).toISOString()
      });
    }
    catch (ex) {
      return ex;
    }
  },
  acceptInvitation(user) {
    check(user, {
      email: String,
      password: Object,
      token: String
    });

    try {
      var userId = SellerEnvy.Modules.server.acceptInvitation(user);
      return userId;
    }
    catch (ex) {
      return ex;
    }
  }
});
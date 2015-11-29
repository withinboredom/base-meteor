Invitations = new Meteor.Collection('invitations');

Invitations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Invitations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let InvitationsSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email to send the invitation to"
  },
  token: {
    type: String,
    label: "Invitation Token"
  },
  role: {
    type: String,
    label: "Role to apply the user"
  },
  date: {
    type: String,
    label: "Date of the invitation"
  }
});

Invitations.attachSchema(InvitationsSchema);

SellerEnvy.Collection.Invitation = Invitations;
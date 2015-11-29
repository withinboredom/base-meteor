SellerEnvy.Views.UserEdit = React.createClass({
  selected(role) {
    let roles = Roles.getRolesForUser(this.props.user);

    return roles;

    if (roles == role) {
      return {selected: true};
    }
    return {selected: false};
  },
  disabledIfAdmin() {
    if (Roles.userIsInRole(this.props.user, 'admin')) {
      return true;
    }

    return false;
  },
  isCurrentUser() {
    return this.props.user == Meteor.user();
  },
  changeRole(e) {
    console.log(this.props.user);
    Meteor.call('setRoleOnUser', {
      user: this.props.user,
      role: e.target.value
    }, (error, response) => {
      if (error) {
        Bert.alert(error.reason, "warning");
      }
    })
    console.log(this.props.user);
  },
  hasInvitations() {
    let invitations = SellerEnvy.Collection.Invitation.find().count();
    return invitations > 0;
  },
  invitations() {
    return SellerEnvy.Collection.Invitation.find();
  },
  revokeInvite() {

  },
  render() {

    let youLabel = "";


    return (
      <tr>
        <td htmlClass="text-left text-middle">

          {this.props.user.emails[0].address}
        </td>
        <td>
          <select value={this.selected()} multiple={true} disabled={this.disabledIfAdmin()} name="userRole" htmlclass="form-control" onChange={this.changeRole}>
            <option value="undefined">Undefined</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </td>
      </tr>
    );
  }
});
SellerEnvy.Views.UserEdit = React.createClass({
  getInitialState() {
    return {
      role: Roles.getRolesForUser(this.props.user)[0],
      email: this.props.user.emails[0].address
    };
  },
  disabledIfAdmin() {
    return Roles.userIsInRole(this.props.user, 'admin');
  },
  isCurrentUser() {
    return this.props.user == Meteor.user();
  },
  changeRole(e) {
    this.setState({
      role: e.target.value
    });

    Meteor.call('setRoleOnUser', {
      user: this.props.user,
      role: e.target.value
    }, (error, response) => {
      if (error) {
        Bert.alert(error.reason, "warning");
      }
    });
  },
  render() {

    let youLabel = "";


    return (
      <tr>
        <td htmlClass="text-left text-middle">
          {this.state.email}
        </td>
        <td>
          <select value={this.state.role}
                  multiple={false}
                  disabled={this.disabledIfAdmin()}
                  name="userRole"
                  htmlclass="form-control"
                  onChange={this.changeRole}>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </td>
      </tr>
    );
  }
});
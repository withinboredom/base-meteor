SellerEnvy.Views.InviteEdit = React.createClass({
  revoke(e) {
    if (confirm("Are you sure?")) {
      Meteor.call("revokeInvitation", this.props.invite, (error, response) => {
        if (error) {
          Bert.alert(error.reason, "warning");
        }
        else {
          Bert.alert("Deleted!", "success");
        }
      })
    }
  },
  render() {
    return (
      <tr>
        <td className="text-left text-middle">{this.props.invite.email}</td>
        <td className="text-center text-middle">{this.props.invite.role}</td>
        <td className="text-center text-middle">{this.props.invite.date}</td>
        <td className="text-center">
          <button type="button" className="btn btn-danger revoke-invite" onClick={this.revoke}>Revoke</button>
        </td>
      </tr>
    );
  }
});
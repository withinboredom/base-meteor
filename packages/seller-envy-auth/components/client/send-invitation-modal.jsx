SellerEnvy.Views.InvitationModal = React.createClass({
  sendInvite(e) {
    e.preventDefault();

    let email = this.state.email,
      role = this.state.role;

    if (email != "" && role != "") {
      Meteor.call("sendInvite", {
        email: email,
        role: role
      }, (error, response) => {
        if (error) {
          Bert.alert(error.reason, "warning");
        }
        else {
          $("#send-invitation-modal").modal('hide');
          $(".modal-backdrop").hide();
          Bert.alert("Sent!", "success");
          this.setState(this.getInitialState());
        }
      })
    }
  },
  getInitialState() {
    return {
      email: "",
      role: ""
    };
  },
  updateEmail(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  },
  updateRole(e) {
    this.setState({
      role: e.target.value
    });
  },
  render() {
    return (
      <div className="modal fade" id="send-invitation-modal" tabIndex="-1" role="dialog"
           aria-labelledby="send-invitation-modal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="send-invitation">Send Invitation</h4>
            </div>
            <form onSubmit={this.sendInvite}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="email-address">Email Address</label>
                  <input type="email" className="form-control" name="emailAddress" value={this.state.email} onChange={this.updateEmail} />
                </div>
                <div>
                  <label htmlFor="roles">User Role</label>
                  <select value={this.state.role} name="roles" className="form-control" onChange={this.updateRole}>
                    <option value="">Select a role</option>
                    <option value="employee">Employee</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-success">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
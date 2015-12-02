SellerEnvy.Views.Users = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe('users');

    return {
      ready: subscription.ready(),
      users: Meteor.users.find({}).fetch(),
      invites: SellerEnvy.Collection.Invitation.find().fetch()
    }
  },
  componentDidMount() {
  },
  render() {
    if (!this.data.ready) {
      return (
        <div>
          <h4 className="page-header">Please wait, loading</h4>
        </div>
      );
    }
    if (Roles.userIsInRole(Meteor.user(), 'admin')) {
      return (
        <div>
          <h4 className="page-header">Users</h4>
          <SellerEnvy.Views.InvitationModal show={false} />
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Email Address</th>
              <th className="text-center">Role</th>
            </tr>
            </thead>
            <tbody>
            {this.data.users.map((user, index) => {
              return <SellerEnvy.Views.UserEdit key={index} user={user}/>
              })}
            </tbody>
          </table>

          <div className="page-header clearfix">
            <h4 className="pull-left">Invitations</h4>
            <button className="btn btn-success pull-right" data-toggle="modal"
                    data-target="#send-invitation-modal">Send Invite</button>
          </div>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Email Address</th>
              <th className="text-center">Invite</th>
              <th className="text-center">Date Sent</th>
              <th />
            </tr>
            </thead>
            <tbody>
            {this.data.invites.map((invite, index) => {
              return <SellerEnvy.Views.InviteEdit key={index} invite={invite} />
              })}
            </tbody>
          </table>
        </div>
      );
    }
    else {
      return (
        <h3>Not allowed</h3>
      );
    }
  }
});
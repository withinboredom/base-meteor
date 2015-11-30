SellerEnvy.Views.Invite = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe('invite', FlowRouter.current().params.token);

    return {
      invite: SellerEnvy.Collection.Invitation.findOne()
    };
  },
  getInvite() {
    var invite = SellerEnvy.Collection.Invitation.findOne();

    if (invite) {
      return invite;
    }
  },
  createUser(e) {
    e.preventDefault();

    let user = {
      email: this.data.invite.email,
      password: Accounts._hashPassword(this.state.password),
      token: FlowRouter.current().params.token
    };

    Meteor.call('acceptInvitation', user, (error, response) => {
      if (error) {
        Bert.alert(error.reason, 'warning');
      }
      else {
        Meteor.loginWithPassword(this.data.invite.email, this.state.password);
      }
    });
  },
  getInitialState() {
    return {
      email: "",
      password: ""
    };
  },
  updatePassword(e) {
    this.setState({
      password: e.target.value
    });
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h3 className="page-header">Accept Invitation</h3>
          <form id="accept-invitation" onSubmit={this.createUser}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input disabled type="email" name="emailAddress" className="form-control" placeholder="Email Address"
                     value={this.data.invite.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password"><span className="pull-left">Password</span></label>
              <input type="password" name="password" className="form-control" placeholder="password"
                     onChange={this.updatePassword} value={this.state.password} />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Create Account" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});
SellerEnvy.Views.AuthenticatedNavigation = React.createClass({
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  },
  render() {
    return (
      <div id="navbar-collapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className={FlowHelpers.currentRoute( 'index' )}>
            <a href={FlowHelpers.pathFor("/")}>Index</a>
          </li>
          <li className={FlowHelpers.currentRoute( 'dashboard' )}>
            <a href={FlowHelpers.pathFor("dashboard")}>Dashboard</a>
          </li>
          <li className={FlowHelpers.currentRoute('users')}>
            <a href={FlowHelpers.pathFor('users')}>Users</a>
          </li>
          <li className={FlowHelpers.currentRoute('inventory')}>
            <a href={FlowHelpers.pathFor('inventory')}>Inventory</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.currentUserEmail()}
              <span className="caret" />
            </a>
            <ul className="dropdown-menu" role="menu">
              <li onClick={Meteor.logout}><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});
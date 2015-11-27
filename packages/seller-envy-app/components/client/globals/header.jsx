SellerEnvy.Views.AppHeader = React.createClass({
  brandLink() {
    if ( Meteor.isClient && !Meteor.loggingIn() && !Meteor.userId() ) {
      return FlowRouter.path( 'login' );
    } else if (Meteor.isServer) {
      return FlowRouter.path('login');
    }

    return FlowRouter.path( 'index' );
  },
  navigationItems() {
    if ( Meteor.isClient && !Meteor.loggingIn() && Meteor.user() ) {
      return <SellerEnvy.Views.AuthenticatedNavigation />;
    } else {
      return <SellerEnvy.Views.PublicNavigation />;
    }
  },
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href={this.brandLink()}>Seller Envy</a>
          </div>
          {this.navigationItems()}
        </div>
      </nav>
    );
  }
});
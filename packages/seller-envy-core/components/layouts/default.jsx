SellerEnvy.Views.Default = React.createClass({
  render() {
    return (
      <div className="app-root">
        <SellerEnvy.Views.AppHeader />
        <div className="container">
          {this.props.yield}
        </div>
      </div>
    );
  }
});
SellerEnvy.lib.Layout = React.createClass({
  getInitialState() {
    return {
      section: "",
      isLoading: true
    }
  },
  showWelcome() {
    return true;
  },
  closeWelcome() {
    return false;
  },
  notices: {
    list: []
  },
  render() {
    const sectionClass = 'wp layout is-section-' + this.state.section + ' focus-';
    const loadingClass = {
      layout__loader: true,
      'is-active': this.state.isLoading
    };
    return (
      <div className={sectionClass}>
        <SellerEnvy.lib.Masterbar user={this.props.user} section={this.state.section} />
        <div className={loadingClass}>
          <SellerEnvy.lib.PulsingDot active={this.state.isLoading} />
        </div>
        <div id="content" className="wp-content">
          <SellerEnvy.lib.Welcome isVisible={this.showWelcome} closeAction={this.closeWelcome} additionalClassName="NuxWelcome">
            <SellerEnvy.lib.WelcomeMessage />
          </SellerEnvy.lib.Welcome>
          <SellerEnvy.lib.NoticesList id="notices" notices={this.notices.list} forcePinned={false} />
          <div id="primary" className="wp-primary wp-section">
            {this.props.yield}
          </div>
          <div id="secondary" className="wp-secondary">
            {this.props.secondary}
          </div>
        </div>
        <div id="tertiary">
          {this.props.tertiary}
        </div>
      </div>
    );
  }
});
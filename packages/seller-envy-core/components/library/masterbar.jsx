SellerEnvy.lib.Masterbar = React.createClass({
  getInitialState() {
    return {
      animationState: -1,
      showNotes: false,
      newNote: false
    }
  },
  toggleNotesFrame(event) {},
  checkToggleNotes(event, forceToggle) {

  },
  setNotesIndicator(currentUnseenCount) {

  },
  renderMenu() {
    if (this.props.user) {
      return <SellerEnvy.lib.MasterbarSectionsMenu ref="masterbar" user={this.props.user} section={this.props.section}
                                                   toggleNotesFrame={this.toggleNotesFrame}
                                                   showNotes={this.state.showNotes}
                                                   newNote={this.state.newNote}
                                                   animationState={this.state.animationState} />
    }
    return <SellerEnvy.lib.MasterbarLoggedOutMenu />
  },
  renderNotifications() {
    if (this.props.user) {
      return <Notifications visible={this.state.showNotes} checkToggle={checkToggleNotes}
                            setIndicator={this.setNotesIndicator} />
    }
  },
  render() {
    return (
      <header id="header" className="">
        <div className="wpcom-navigation site-navigation" role="navigation">
          {this.renderMenu()}
        </div>
        {this.renderNotifications()}
      </header>
    );
  }
});
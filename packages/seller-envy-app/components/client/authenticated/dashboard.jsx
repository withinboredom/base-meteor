SellerEnvy.Views.Dashboard = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'dashboard' );

    return {
      isLoading: !subscription.ready(),
      people: SellerEnvy.Collection.People.find().fetch()
    };
  },
  render() {
    if ( this.data.isLoading ) {
      return <SellerEnvy.Views.Loading />;
    } else {
      return (
        <SellerEnvy.Views.PeopleTable people={this.data.people} />
      );
    }
  }
});
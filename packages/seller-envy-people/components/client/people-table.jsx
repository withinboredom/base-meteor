SellerEnvy.Views.PeopleTable = React.createClass({
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email Address</th>
          </tr>
          </thead>
          <tbody>
          {this.props.people.map( ( person, index ) => {
            return <SellerEnvy.Views.Person key={index} person={person} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
});
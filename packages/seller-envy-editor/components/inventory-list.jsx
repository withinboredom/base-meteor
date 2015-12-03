SellerEnvy.Views.Inventory.InventoryList = React.createClass({
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>
              {/* Image goes here */}
            </th>
            <th>
              Title
            </th>
            <th>
              Identifier
            </th>
            <th>
              Identifier Type
            </th>
            <th>
              Quantity
            </th>
            <th>
              Condition
            </th>
            <th>
              Comments
            </th>
            <th>
              Location
            </th>
            <th>
              ASIN
            </th>
          </tr>
          </thead>
          <tbody>
          {this.props.inventory.map((item, index) => {
            return <SellerEnvy.Views.Inventory.InventoryListItem item={item} key={item._id} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
});
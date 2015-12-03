SellerEnvy.Views.Inventory.Inventory = React.createClass({
  render() {
    return (
      <div>
        {/* Put search here */}
        <SellerEnvy.Views.Inventory.InventorySearch />
        {/* Put add new item here */}
        {/* List of items here */}
        <SellerEnvy.Views.Inventory.InventoryList inventory={[{
        _id: "abv",
        pictureUrl: "http://ecx.images-amazon.com/images/I/51mV4j4AOnL.jpg"
        }]} />
      </div>
    );
  }
});
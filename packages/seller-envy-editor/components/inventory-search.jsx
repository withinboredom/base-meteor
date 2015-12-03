SellerEnvy.Views.Inventory.InventorySearch = React.createClass({
  getInitialState() {
    return {
      upc: ""
    };
  },
  render() {
    return (
      <div className="row">
        <form>
          <div className="">
            <label htmlFor="UPC">UPC</label>
            <input type="text" id="UPC" value={this.state.upc} />
            <button type="submit" className="btn btn-success" >Lookup</button>
          </div>
        </form>
      </div>
    );
  }
});
SellerEnvy.Views.Inventory.InventoryListItem = React.createClass({
  render() {
    return (
      <tr>
        <td className="text-center">
          <img style={{width: '50px'}} className="img-circle" src={this.props.item.pictureUrl} alt="Picture of item" />
        </td>
        <td>
          Title
        </td>
        <td>
          ID
        </td>
        <td>
          IDType
        </td>
        <td>
          QOH
        </td>
        <td>
          Condition
        </td>
        <td>
          Comments
        </td>
        <td>
          Location
        </td>
        <td>
          ASIN
        </td>
      </tr>
    );
  }
});
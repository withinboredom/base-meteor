authenticatedRoutes.route('/inventory', {
  name: 'inventory',
  action() {
    ReactLayout.render(SellerEnvy.Views.Default, {yield: <SellerEnvy.Views.Inventory.Inventory />})
  }
});

authenticatedRoutes.route('/inventory/:id', {
  name: 'inventory-detail',
  action() {
    const id = FlowRouter.current().params.id;
    ReactLayout.render(SellerEnvy.Views.Default, {yield: <SellerEnvy.Views.Inventory.InventoryDetail id={id} />});
  }
});

authenticatedRoutes.route('/inventory/add', {
  name: 'inventory-add',
  action() {
    ReactLayout.render(SellerEnvy.Views.Default, {yield: <SellerEnvy.Views.Inventory.AddInventory />});
  }
});


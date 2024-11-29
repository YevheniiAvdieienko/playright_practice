import { loggedInUserTest } from "../../fixtures";

loggedInUserTest("open existed order", async ({ app }) => {

  await app.dashboard.open();
  await app.dashboard.menu.openOrderTab();
  await app.dashboard.orders.searchOrderByOrderId("6706a30d728892001c941030");
  await app.dashboard.orders.ordersList.openFirstOrder();
  await app.orderPage.expectLoaded();
});

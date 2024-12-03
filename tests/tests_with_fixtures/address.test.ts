import { expect } from "@playwright/test";
import { loggedInUserTest } from "../../fixtures";

loggedInUserTest("succesfully add address", async ({ app }) => {
  await app.dashboard.open();
  await app.dashboard.menu.openAddressTab();
  const beforeAdding = await app.dashboard.addresses.countNumberOfAddresses();
  await app.dashboard.addresses.addAddress({
    address: "test address",
    city: "test city",
    state: "test",
    country: "test country",
    zipcode: "testee",
  });

  const afterAdding = await app.dashboard.addresses.countNumberOfAddresses();
  expect(afterAdding - beforeAdding).toEqual(1);
});

import { expect } from "@playwright/test";
import { loggedInUserTest } from "../";
const messageIncrement = Math.ceil(Math.random() * 10000);

loggedInUserTest("succesfully write to support", async ({ app }) => {

  await app.dashboard.open();
  await app.dashboard.menu.openSupportTab();
  await app.dashboard.support.chooseAdminToWrite();
  const beforeSending =
    await app.dashboard.support.calculateSizeOfChatHistory();
  await app.dashboard.support.writeToSupport(
    `Hello I have a problem ${messageIncrement}`,
  );
  await app.dashboard.support.waitForNewMessageInTheHistory(
    `Hello I have a problem ${messageIncrement}`,
  );
  const afterSending = await app.dashboard.support.calculateSizeOfChatHistory();
  expect(afterSending - beforeSending).toEqual(1);
});

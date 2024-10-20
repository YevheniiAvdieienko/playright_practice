import { test, expect } from "@playwright/test";
import { Application } from "../app";
const emailIncrement = Math.ceil(Math.random() * 10000);

test("successful registration", async ({ page }) => {
  const app = new Application(page);

  await app.signup.open();
  await app.signup.signup({
    email: `yevhenii.avdieienko${emailIncrement}@gmail.com`,
    firstname: "Test",
    lastname: "Testov",
    password: "123456789",
  });
});

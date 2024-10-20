import { test, expect } from "@playwright/test";
import { Application } from "../app";

test("successful login", async ({ page }) => {
  const app = new Application(page);

  await app.signin.open();
  await app.signin.signin({
    email: "yevhenii.avdieienko@gmail.com",
    password: "12345678",
  });
});

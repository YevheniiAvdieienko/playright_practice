import { test } from "@playwright/test";
import { Application } from "../app";

export const baseFixture = test.extend< {app: Application}>({
    app: async ({page}, use) => {
        const app = new Application(page);
        await use(app);
    }
})

export type DefaultUserOption = {
    defaultUser: {
      email: string;
      password: string;
    };
  };

export const loggedInUserTest = baseFixture.extend< DefaultUserOption &{ app: Application}>({

    defaultUser: 
        {
          email: "yevhenii.avdieienko@gmail.com",
          password: "12345678",
        },
      app: async ({ app, defaultUser }, use) => {
        await app.signin.open();
        await app.signin.signin(defaultUser);
        await app.dashboard.accountDetails.expectLoaded();
    
        await use(app);
      },
});
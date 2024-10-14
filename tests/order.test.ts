import { test, expect } from '@playwright/test';
import { Application } from '../app'; 

test( 'open existed order', async ({ page }) => {
    const app = new Application(page);

    await app.signin.open();
    await app.signin.signin({email:"yevhenii.avdieienko@gmail.com", password: "12345678"});

    await app.dashboard.open();
    await app.dashboard.menu.openOrderTab();
    await app.dashboard.orders.searchOrderByOrderId('6706a30d728892001c941030');
    await app.dashboard.orders.ordersList.openFirstOrder();
    await app.orderPage.expectLoaded();
});


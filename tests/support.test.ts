import { test, expect } from '@playwright/test';
import { Application } from '../app'; 
const messageIncrement = Math.ceil(Math.random() * 10000);

test( 'succesfully write to support', async ({ page }) => {
    const app = new Application(page);

    await app.signin.open();
    await app.signin.signin({email:"yevhenii.avdieienko@gmail.com", password: "12345678"});

    await app.dashboard.open();
    await app.dashboard.menu.openSupportTab();
    await app.dashboard.support.chooseAdminToWrite();
    const beforeSending = await app.dashboard.support.calculateSizeOfChatHistory();
    await app.dashboard.support.writeToSupport(`Hello I have a problem ${messageIncrement}`);
    await app.dashboard.support.waitForNewMessageInTheHistory(`Hello I have a problem ${messageIncrement}`);
    const afterSending = await app.dashboard.support.calculateSizeOfChatHistory();
    expect(afterSending - beforeSending).toEqual(1)

});


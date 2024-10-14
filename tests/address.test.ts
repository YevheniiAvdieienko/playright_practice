import { test, expect } from '@playwright/test';
import { Application } from '../app'; 

test( 'succesfully add address', async ({ page }) => {
    const app = new Application(page);

    await app.signin.open();
    await app.signin.signin({email:"yevhenii.avdieienko@gmail.com", password: "12345678"});

    await app.dashboard.open();
    await app.dashboard.menu.openAddressTab();
    const beforeAdding = await app.dashboard.addresses.countNumberOfAddresses();
    await app.dashboard.addresses.addAddress({
         address: 'test address',
         city: 'test city', 
         state: 'test', 
         country: 'test country', 
         zipcode: 'testee'
        });
    
    const afterAdding = await app.dashboard.addresses.countNumberOfAddresses();
    console.log(beforeAdding);
    console.log(afterAdding);
    expect(afterAdding - beforeAdding).toEqual(1)
});


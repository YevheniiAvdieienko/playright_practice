import { test, expect } from '@playwright/test';
import { Application } from '../app'; 
const emailIncrement = Math.ceil(Math.random() * 1000);


test('test contact us', async ({ page }) => {
  const app = new Application(page);

  await app.contactus.open();

  //Fill contact us form
  await app.contactus.submitForm({
     fullname: 'Yevhenii', 
     email:`yevhenii.avdieienko${emailIncrement}@gmail.com`, 
     message: 'test test testset ' })

  //Validate that ticket is created
  await app.contactus.expectTicketSuccsesfullyCreated()
});


import { test, expect } from '@playwright/test';
 const emailIncrement = Math.ceil(Math.random() * 100);

test('test registration', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/register');
  
  //Fill registration form
  await page.locator("[name='email']").first().fill(`yevhenii.avdieienko${emailIncrement}@gmail.com`);
  await page.locator("[name='firstName']").fill("Yevhenii");
  await page.locator("[name='lastName']").fill("Test");
  await page.locator("[name='password']").fill("123456");
  await page.locator('.signup-form button').click();
  
  //validate that registration is successful
  await expect(page.locator(".notification-success")).toBeVisible();
  expect(page.locator("[class='navbar-nav'] li").filter({hasText: 'Yevhenii'})).toBeTruthy();
  
});

test('test contact us', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');

  //Fill contact us form
  await page.locator("[name='name']").fill("Yevhenii");
  await page.locator("[name='email']").first().fill(`yevhenii.avdieienko${emailIncrement}@gmail.com`);
  await page.locator("[name='message']").fill("TEst test test");
  await page.locator('.contact button').click();

  //Validate that ticket is created
  await expect(page.locator(".notification-success")).toBeVisible();
});

test('test purchase', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');

// login
  await page.locator('[name="email"]').first().fill('yevhenii.avdieienko@gmail.com')
  await page.locator('[name="password"]').fill('123456')
  await page.locator('[type="submit"]').first().click();

// is login succesfull
  await expect(page.locator(".notification-success")).toBeVisible();
  expect(page.locator("[class='navbar-nav'] li").filter({ hasText: 'Yevhenii' })).toBeTruthy();

// navigate to products
  await page.locator("[class='navbar-nav'] li").filter({hasText: 'Brands'}).click();
  await page.locator("[href='/brands']").click();
  await page.locator("[class='d-block brand-box']").click();

//choose and add product to the basket
  await page.locator('[class="product-list"] div').first().click();
  await page.locator('[class="item-actions"] button').click();
  await page.locator('[class="checkout-actions"] button').nth(1).click();

// Validate that order is succesfull
  await expect(page.locator('[class="order-success"]')).toBeVisible();
  await expect(page.locator("[class='order-label']")).not.toBeEmpty();
});

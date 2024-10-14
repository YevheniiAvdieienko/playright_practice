import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";



export class SignUp extends AppPage{

    public pagePath=  "/register";

    private signupContainer = this.page.locator('.signup-form');

    private emailField = this.page.locator(".signup-form [name='email']");
    private firstnameField = this.page.locator("[name='firstName']");
    private lastnameField = this.page.locator("[name='lastName']");
    private passwordField = this.page.locator("[name='password']");
    private subscribeCheckBox = this.page.locator('#subscribe');
    private signupButton = this.page.locator('.signup-form button');

    private googleLogin = this.page.locator('.signup-provider').first();
    private facebookLogin = this.page.locator('.signup-provider').nth(1);

    private successNotification = this.page.locator(".notification-success")
  
    async expectLoaded(message?: string): Promise<void> {
        expect(this.signupContainer).toBeVisible();
    }

    async signup(data:{email:string, firstname: string, lastname: string, password: string}){
        await this.emailField.fill(data.email);
        await this.firstnameField.fill(data.firstname);
        await this.lastnameField.fill(data.lastname);
        await this.passwordField.fill(data.password);
        await this.signupButton.click();

        await expect(this.successNotification).toBeVisible();

    }
}

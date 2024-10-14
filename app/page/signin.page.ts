import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";

export class SignIn extends AppPage{
    public pagePath = "/login";

    private signinContainer = this.page.locator('.login-form');
    private emailField = this.page.locator('.login-form [name="email"]');
    private passwordField = this.page.locator('.login-form [name="password"]');
    private loginButton = this.page.locator('[type="submit"]').first();;
    private createAccountButton = this.page.locator('[type="submit"]').nth(1);
    private googleLogin = this.page.locator('.google-btn');
    private facebookLogin = this.page.locator('.facebook-btn');
    private forgotPasswordLink = this.page.locator('.forgot-password-link');
    private successNotification = this.page.locator(".notification-success")


    async expectLoaded(message?: string): Promise<void> {
        expect(this.signinContainer).toBeVisible();
    }

    async signin(credentias:{email:string, password:string}){
        await this.emailField.fill(credentias.email);
        await this.passwordField.fill(credentias.password);
        await this.loginButton.click();

        await expect(this.successNotification).toBeVisible();
    }
}
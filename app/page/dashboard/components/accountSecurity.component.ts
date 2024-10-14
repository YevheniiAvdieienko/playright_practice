import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";


export class AccountSecurity extends Component{

    private accountSecurityContainer = this.page.locator('.account-security');
    private passwordField = this.page.locator('[name="password"]');
    private confirmPasswordField = this.page.locator('[name="confirmPassword"]');
    private resetPasswordButton = this.page.locator('.reset-actions button');

    async expectLoaded(message?: string): Promise<void> {
        expect(this.accountSecurityContainer).toBeVisible();
    }

    async changePassword(oldPassword: string, newPassword: string){
        await this.passwordField.fill(oldPassword);
        await this.confirmPasswordField.fill(newPassword);
        await this.resetPasswordButton.click();
    }
}
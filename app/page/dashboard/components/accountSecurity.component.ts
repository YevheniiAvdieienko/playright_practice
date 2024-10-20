import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";

export class AccountSecurity extends Component {
  private accountSecurityTitle = this.page.getByRole("heading", {
    name: "Account Security",
  });
  private passwordField = this.page
    .getByRole("textbox")
    .getByPlaceholder("Old Password");
  private confirmPasswordField = this.page
    .getByRole("textbox")
    .getByPlaceholder("Confirm Password");
  private resetPasswordButton = this.page.getByRole("button", {
    name: "Reset Password",
  });

  async expectLoaded(message?: string): Promise<void> {
    expect(this.accountSecurityTitle).toHaveText("Account Security");
  }

  async changePassword(oldPassword: string, newPassword: string) {
    await this.passwordField.fill(oldPassword);
    await this.confirmPasswordField.fill(newPassword);
    await this.resetPasswordButton.click();
  }
}

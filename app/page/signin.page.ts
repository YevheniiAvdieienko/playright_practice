import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";

export class SignIn extends AppPage {
  public pagePath = "/login";

  private signinTitle = this.page.getByRole("heading", { name: "Login" });
  private emailField = this.page.locator('.login-form [name="email"]');
  private passwordField = this.page.getByPlaceholder(
    "Please Enter Your Password",
  );
  private loginButton = this.page.getByRole("button", { name: "Login" });
  private createAccountButton = this.page.getByRole("button", {
    name: "Create an account",
  });
  private googleLogin = this.page.getByRole("link", {
    name: "Login with Google",
  });
  private facebookLogin = this.page.getByRole("link", {
    name: "Login with Facebook",
  });
  private forgotPasswordLink = this.page.getByRole("link", {
    name: "Forgot Password?",
  });
  private successNotification = this.page.locator(".notification-success");

  async expectLoaded(message?: string): Promise<void> {
    expect(this.signinTitle).toHaveText("Login");
  }

  async signin(credentias: { email: string; password: string }) {
    await this.emailField.fill(credentias.email);
    await this.passwordField.fill(credentias.password);
    await this.loginButton.click();

    await expect(this.successNotification).toBeVisible();
  }
}

import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { Notification } from "../component/notification.component";

export class SignUp extends AppPage {
  public pagePath = "/register";

  private signupTitle = this.page.getByRole("heading", { name: "Sign Up" });

  private emailField = this.page.locator(".signup-form [name='email']");
  private firstnameField = this.page.getByPlaceholder(
    "Please Enter Your First Name",
  );
  private lastnameField = this.page.getByPlaceholder(
    "Please Enter Your Last Name",
  );
  private passwordField = this.page.getByPlaceholder(
    "Please Enter Your Password",
  );
  private subscribeCheckBox = this.page.getByRole("checkbox", {
    name: "Subscribe to newsletter",
  });
  private signupButton = this.page.getByRole("button", { name: "Sign Up" });

  private googleLogin = this.page.getByRole("link", {
    name: "Login with Google",
  });
  private facebookLogin = this.page.getByRole("link", {
    name: "Login with Facebook",
  });

  private successNotification = this.page.locator(".notification-success");

  async expectLoaded(message?: string): Promise<void> {
    expect(this.signupTitle).toHaveText("Sign Up");
  }

  async signup(data: {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
  }) {
    await this.emailField.fill(data.email);
    await this.firstnameField.fill(data.firstname);
    await this.lastnameField.fill(data.lastname);
    await this.passwordField.fill(data.password);
    await this.signupButton.click();

    await expect(this.successNotification).toBeVisible();
  }
}

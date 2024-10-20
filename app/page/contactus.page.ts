import { AppPage } from "../abstractClasses";
import { expect } from "@playwright/test";
import { Notification } from "../component/notification.component";

export class ContactUs extends AppPage {
  public pagePath = "/contact";

  private contactFormTitle = this.page.getByRole("heading", {
    name: "Contact Information",
  });
  private fullnameField = this.page.getByPlaceholder("You Full Name");
  private emailField = this.page.getByPlaceholder("Your Email Address");
  private messageField = this.page.getByPlaceholder(
    "Please Describe Your Message",
  );
  private submitButton = this.page.getByRole("button", { name: "Submit" });

  private successNotification = this.page.locator(".notification-success");

  async openPage() {
    await this.page.goto(this.pagePath);
  }
  async expectLoaded() {
    expect(this.contactFormTitle).toHaveText("Contact Information");
  }

  async submitForm(options: {
    fullname: string;
    email: string;
    message: string;
  }) {
    await this.expectLoaded();
    await this.fullnameField.fill(options.fullname);
    await this.emailField.fill(options.email);
    await this.messageField.fill(options.message);
    await this.submitButton.click();
  }

  async expectTicketSuccsesfullyCreated() {
    await expect(this.successNotification).toBeVisible();
  }
}

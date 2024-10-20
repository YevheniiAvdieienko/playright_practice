import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";

export class AccountDetails extends Component {
  private accountDetailsTitle = this.page.getByRole("heading", {
    name: "Account Details",
  });
  private currentEmail = this.page.locator(".info p");
  private currentRole = this.page.locator(".info span");
  private firstNameField = this.page.getByPlaceholder(
    "Please Enter Your First Name",
  );
  private lastNameField = this.page.getByPlaceholder(
    "Please Enter Your Last Name",
  );
  private phoneNUmber = this.page.getByPlaceholder(
    "Please Enter Your Phone Number",
  );
  private submitButton = this.page.getByRole("button", {
    name: "Save changes",
  });

  async expectLoaded(message?: string): Promise<void> {
    expect(this.accountDetailsTitle).toHaveText("Account Details");
  }

  async changeFirstnameTo(newFirstName: string) {
    await this.firstNameField.fill(newFirstName);
    await this.submitButton.click();
  }

  async changeLastNameTo(newLastname: string) {
    await this.lastNameField.fill(newLastname);
    await this.submitButton.click();
  }
  async changePhoneTo(newPhone: string) {
    await this.phoneNUmber.fill(newPhone);
    await this.submitButton.click();
  }
}

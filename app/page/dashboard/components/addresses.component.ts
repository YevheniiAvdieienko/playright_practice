import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { Notification } from "../../../component/notification.component";

export class Addresses extends Component {
  private addressesTitle = this.page.getByRole("heading", {
    name: "Addresses",
  });
  private addButton = this.page.getByRole("button", { name: "Add" });
  private cancellButton = this.page.getByRole("button", { name: "Cancel" });
  private addressField = this.page.getByPlaceholder(
    "Address: Street, House No / Apartment No",
  );
  private cityField = this.page.getByPlaceholder("City");
  private stateField = this.page.getByPlaceholder("State");
  private countryField = this.page.getByPlaceholder(
    "Please Enter Your country",
  );
  private zipcodeField = this.page.getByPlaceholder(
    "Please Enter Your Zipcode",
  );
  private defaultCheckbox = this.page.getByRole("checkbox", {
    name: "As the Default",
  });
  private addAddressButton = this.page.getByRole("button", {
    name: "Add Address",
  });
  private addressBox = this.page.getByRole("heading", {
    name: "Delivery Address",
  });
  private addressList = this.page.locator(".a-list");

  private successNotification = this.page.locator(".notification-success");

  async expectLoaded(message?: string): Promise<void> {
    await expect(this.addressesTitle).toHaveText("Addresses");
  }

  async addAddress(options: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  }) {
    await this.addButton.click();
    await this.addressField.fill(options.address);
    await this.cityField.fill(options.city);
    await this.stateField.fill(options.state);
    await this.countryField.fill(options.country);
    await this.zipcodeField.fill(options.zipcode);
    await this.addAddressButton.click();

    await expect(this.successNotification).toBeVisible();
  }

  async tickCheckbox() {
    await this.defaultCheckbox.check();
  }

  async countNumberOfAddresses(): Promise<number> {
    await expect(this.addressBox.first()).toContainText("Delivery Address");
    return await this.addressBox.count();
  }
}

import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";

export class Menu extends Component {
  private menuTitle = this.page.getByRole("heading", { name: "Account" });

  private accountDetailsTab = this.page.getByRole("link", {
    name: "Account Details",
  });
  private accountSecurityTab = this.page.getByRole("link", {
    name: "Account Security",
  });
  private adressesTab = this.page.getByRole("link", { name: "Address" });
  private ordersTab = this.page.getByRole("link", { name: "Orders" });
  private wishlistTab = this.page.getByRole("link", { name: "WishList" });
  private supportTab = this.page.getByRole("link", { name: "Support" });

  async expectLoaded(message?: string): Promise<void> {
    expect(this.menuTitle).toHaveText("Account");
  }

  async openSupportTab() {
    await this.supportTab.click();
  }

  async openAddressTab() {
    await this.adressesTab.click();
  }

  async openOrderTab() {
    await this.ordersTab.click();
  }
}

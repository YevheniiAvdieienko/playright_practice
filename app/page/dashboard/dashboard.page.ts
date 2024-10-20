import { expect } from "@playwright/test";
import { AppPage } from "../../abstractClasses";
import { AccountDetails } from "./components/accountDetails.component";
import { AccountSecurity } from "./components/accountSecurity.component";
import { Addresses } from "./components/addresses.component";
import { Orders } from "./components/orders.component";
import { Wishlist } from "./components/wishlist.component";
import { Support } from "./components/support.component";
import { Menu } from "./components/menu.component";

export class Dashboard extends AppPage {
  public pagePath = "/dashboard";
  public menu = new Menu(this.page);
  public accountDetails = new AccountDetails(this.page);
  public accountSecurity = new AccountSecurity(this.page);
  public addresses = new Addresses(this.page);
  public orders = new Orders(this.page);
  public wishlist = new Wishlist(this.page);
  public support = new Support(this.page);

  private dashbordContainer = this.page.locator(".customer");

  async expectLoaded(message?: string): Promise<void> {
    expect(this.dashbordContainer).toBeDefined();
  }
}

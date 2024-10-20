import { expect } from "@playwright/test";
import { Application } from "..";
import { AppPage } from "../abstractClasses";

export class OrderPage extends AppPage {
  public pagePath = "";

  private orderDetailsTitle = this.page.getByRole("heading", {
    name: "Order Details",
  });

  async expectLoaded(message?: string): Promise<void> {
    await expect(this.orderDetailsTitle).toHaveText("Order Details");
  }
}

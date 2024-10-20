import { expect, Locator } from "@playwright/test";
import { Component } from "../../../abstractClasses";

export class Order extends Component {
  constructor(private root: Locator) {
    super(root.page());
  }

  private orderStatus = this.page.locator(".order-box .order-status");
  private orderNumber = this.page.getByText("Order #");
  private orderDate = this.page.getByText("Ordered on");
  private orderAmount = this.page.getByText("Order Total");

  async expectLoaded(message?: string): Promise<void> {
    expect(this.orderStatus).toBeVisible();
  }

  status() {
    return this.orderStatus.innerText();
  }
  number() {
    return this.orderNumber.innerText();
  }
  date() {
    return this.orderDate.innerText();
  }
  amount() {
    return this.orderAmount.innerText();
  }

  async select() {
    await this.expectLoaded();
    await this.orderAmount.click();
  }
}

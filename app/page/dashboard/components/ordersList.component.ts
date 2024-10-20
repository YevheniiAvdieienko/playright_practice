import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { Order } from "./order.component";

export class OrdersList extends Component {
  private ordersLocator = this.page.locator(".order-box");

  async expectLoaded(message?: string): Promise<void> {
    await expect(this.ordersLocator).not.toHaveCount(0);
  }

  async getOrderByAmount(amount: string): Promise<Order[]> {
    await this.expectLoaded();
    const orders = await this.ordersLocator.all();
    const filteredOrders = await Promise.all(
      orders.filter(async (o) => (await new Order(o).amount()) === amount),
    );
    return filteredOrders.map((o) => new Order(o));
  }

  async openFirstOrder() {
    await this.ordersLocator.click();
  }
}

import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";

export class Wishlist extends Component {
  private wishlistContainer = this.page.locator(".wishlist-dashboard");
  private wishlistTitle = this.page.getByRole("heading", {
    name: "Your Wishlist",
  });

  async expectLoaded(message?: string): Promise<void> {
    expect(this.wishlistContainer).toBeVisible();
  }
}

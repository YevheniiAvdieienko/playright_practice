import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";


export class Wishlist extends Component{


    private wishlistContainer = this.page.locator('.wishlist-dashboard');
    private wishlistTitle = this.page.locator('.wishlist-dashboard h3')

    async expectLoaded(message?: string): Promise<void> {
        expect(this.wishlistContainer).toBeVisible();
    }
}
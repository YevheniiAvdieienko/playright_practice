import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";


export class Menu extends Component  {

    private menuContainer = this.page.locator('.panel-sidebar');

    private accountDetailsTab = this.page.locator('.panel-links [href="/dashboard"]');
    private accountSecurityTab = this.page.locator('.panel-links [href="/dashboard/security"]');
    private adressesTab = this.page.locator('.panel-links [href="/dashboard/address"]');
    private ordersTab = this.page.locator('.panel-links [href="/dashboard/orders"]');
    private wishlistTab = this.page.locator('.panel-links [href="/dashboard/wishlist"]');
    private supportTab = this.page.locator('.panel-links [href="/support"]');


    async expectLoaded(message?: string): Promise<void> {
        expect(this.menuContainer).toBeVisible();
    }

    async openSupportTab(){
        await this.supportTab.click();
    }

    async openAddressTab(){
        await this.adressesTab.click();
    }

    async openOrderTab(){
        await this.ordersTab.click();
    }
}
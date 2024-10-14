import { expect } from "@playwright/test";
import { Application } from "..";
import { AppPage } from "../abstractClasses";

export class OrderPage extends AppPage{
    public pagePath =  '';
    
    private orderDetailsContainer = this.page.locator('.order-details');

    async expectLoaded(message?: string): Promise<void> {
        expect(this.orderDetailsContainer).toBeVisible();
    }
}
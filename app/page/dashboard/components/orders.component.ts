import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";
import { OrdersList } from "./ordersList.component";
import { Order } from "./order.component";

export class Orders extends Component{

    private orderContainer = this.page.locator('.product-dashboard');
    private searchField = this.page.locator('[name="order"]');
    private searchButton = this.page.locator('.order-dashboard button');
    private ordersCounter = this.page.locator('.order-dashboard p');

    public ordersList = new OrdersList(this.page);


    async expectLoaded(message?: string): Promise<void> {
        expect(this.orderContainer).toBeVisible();
    }

    async searchOrderByOrderId(orderId: string){
        await this.searchField.fill(orderId);
        await this.searchButton.click();
    }

    async getOrderByAmount(amount: string){
        const matchedFirstResult = (await this.ordersList.getOrderByAmount(amount))[0];
        await matchedFirstResult.select();
    }

}

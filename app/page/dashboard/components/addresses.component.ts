import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";


export class Addresses extends Component{


    private addressesContainer = this.page.locator('.address-dashboard');
    private addButton = this.page.locator('.address-dashboard .btn-text');
    private cancellButton = this.page.locator('.action button');
    private addressField = this.page.locator('[name="address"]');
    private cityField = this.page.locator('[name="city"]');
    private stateField = this.page.locator('[name="state"]');
    private countryField = this.page.locator('[name="country"]');
    private zipcodeField = this.page.locator('[name="zipCode"]');
    private defaultCheckbox = this.page.locator('[name="isDefault"]');
    private addAddressButton = this.page.locator('.add-address-actions button');
    private addressBox = this.page.locator('.address-box h4');
    private addressList = this.page.locator('.a-list');

    private successNotification = this.page.locator(".notification-success")

    async expectLoaded(message?: string): Promise<void> {
        expect(this.addressesContainer).toBeVisible();
    }

    async addAddress(options:{address:string, city: string, state: string, country:string, zipcode:string}){
        await this.addButton.click();
        await this.addressField.fill(options.address);
        await this.cityField.fill(options.city);
        await this.stateField.fill(options.state);
        await this.countryField.fill(options.country);
        await this.zipcodeField.fill(options.zipcode);
        await this.addAddressButton.click();

        await expect(this.successNotification).toBeVisible();
    }

    async tickCheckbox(){
        await this.defaultCheckbox.check();
    }

    async countNumberOfAddresses(): Promise<number>{
        expect( this.addressBox.first()).toContainText('Delivery Address');
        return (await this.addressBox.count());
        
    }
}
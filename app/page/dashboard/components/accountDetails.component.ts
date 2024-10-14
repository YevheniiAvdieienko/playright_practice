import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";


export class AccountDetails extends Component{

    private accountDetailsContainer = this.page.locator('.account');
    private tabHeader = this.page.locator('.subpage-header h3');
    private currentEmail = this.page.locator('.info p');
    private currentRole = this.page.locator('.info span');
    private firstNameField = this.page.locator('[name="firstName"]');
    private lastNameField = this.page.locator('[name="lastName"]');
    private phoneNUmber = this.page.locator('[name="phoneNumber"]');
    private submitButton = this.page.locator('.profile-actions button');


    async expectLoaded(message?: string): Promise<void> {
        expect(this.accountDetailsContainer).toBeVisible();
    }

    async changeFirstnameTo(newFirstName: string){
        await this.firstNameField.fill(newFirstName);
        await this.submitButton.click();
    }

    async changeLastNameTo(newLastname: string){
        await this.lastNameField.fill(newLastname);
        await this.submitButton.click();
    }
    async changePhoneTo(newPhone: string){
        await this.phoneNUmber.fill(newPhone);
        await this.submitButton.click();
    }

}
import { AppPage } from "../abstractClasses";
import { expect } from "@playwright/test";

export class ContactUs extends AppPage{
    public pagePath = '/contact';

    private contactFormContainer = this.page.locator('.contact');
    private fullnameField  = this.page.locator('[name="name"]')
    private emailField  = this.page.locator('[name="email"]').first();
    private messageField  = this.page.locator('[name="message"]')
    private submitButton  = this.page.locator('.contact-actions button')
    private successNotification = this.page.locator('.notification-success')

    async openPage(){
        await this.page.goto(this.pagePath);
    }
    async expectLoaded(){
        expect(this.contactFormContainer).toBeDefined();

    }

    async submitForm(options:{fullname:string, email:string, message:string}){
        await this.expectLoaded();
        await this.fullnameField.fill(options.fullname);
        await this.emailField.fill(options.email);
        await this.messageField.fill(options.message);
        await this.submitButton.click();
    }

    async expectTicketSuccsesfullyCreated() {
        await expect(this.successNotification).toBeVisible();
    }

}
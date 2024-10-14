import { expect } from "@playwright/test";
import { Component } from "../../../abstractClasses";

export class Support extends Component{

    private supportContainer = this.page.locator('.support');
    private userButton = this.page.locator('.u-list button');
    private messageField = this.page.locator('[name="message"]');
    private sendButton = this.page.locator('.input-text-block button').first();

    private messageContainer = this.page.locator('.m-container');
    private messageHistory = this.page.locator('.m-list ');

    async expectLoaded(message?: string): Promise<void> {
        expect(this.supportContainer).toBeVisible();
    }

    async chooseAdminToWrite(){
        await this.userButton.click();
    }
    async writeToSupport(message: string){
        await this.messageField.fill(message);
        await this.sendButton.click();
    }
    async calculateSizeOfChatHistory(): Promise<number>{
        expect(this.messageHistory).toBeVisible();
        return (await this.messageContainer.count());
        
    }

    async waitForNewMessageInTheHistory(message: string){
        await expect(this.messageHistory).toContainText(message);
       }
}
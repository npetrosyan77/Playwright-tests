const {expect} = require("@playwright/test");

module.exports = class Assertions{
    constructor(page) {
        this.page = page;
        this.emailErrMess = '.MuiFormHelperText-root-361:has-text("Please enter correct email")';
        this.passwordErrMess = '.MuiFormHelperText-root-361:has-text("Your password must be at least 8 characters")';
        this.confirmPassErrMess = '.MuiFormHelperText-root-361:has-text("Please make sure your passwords match")';
    }

    async hasHeading(arg){
        await expect(this.page).toHaveTitle(arg);
    }

    async isDisabled(){
        let locator = this.page.locator('[type="submit"]')
        await expect(locator).toBeDisabled();
    }

    async isEnabled(){
        let locator = this.page.locator('[type="submit"]')
        await expect(locator).not.toBeDisabled();
    }

    async emailMessage(){
        let locator = this.page.locator(this.emailErrMess)
        await expect(locator).toBeVisible();
    }

    async passMessage(){
        let locator = this.page.locator(this.passwordErrMess)
        await expect(locator).toBeVisible();
    }

    async confirmPassMessage(){
        let locator = this.page.locator(this.confirmPassErrMess)
        await expect(locator).toBeVisible();
    }
}

module.exports = class SignInPage {
    constructor(page) {
        this.page = page;
        this.fullNameField = '[name="name"]';
        this.phoneFiled = '[name="phone"]';
        this.emailFiled = '[name="email"]';
        this.createPassField = '[name="password"]';
        this.confirmPass = '[name="confirmPassword"]';
        this.submitBtn = '[type="submit"]';

    }

    async clearField(arg) {
        await this.page.locator(arg).click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
    }

    async fillFullName(data) {
        await this.page.locator(this.fullNameField).type(data);
    }

    async fillPhoneNumber(data) {
        await this.page.locator(this.phoneFiled).type(data);
    }

    async fillEmail(data) {
        await this.page.locator(this.emailFiled).type(data)
    }

    async fillInPassword(data){
        await this.page.locator(this.createPassField).type(data)
    }

    async confirmPassword(data){
        await this.page.locator(this.confirmPass).type(data)
    }

    async submit(){
        await this.page.locator(this.submitBtn).click()
    }


}
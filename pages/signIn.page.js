import {studentData} from "../support/test.data"
const Assertions = require("../pages/assertions");

const info = studentData();
// const assertions = new Assertions();


 class SignInPage extends Assertions {
    constructor(page) {
        super();
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

    async fillInPassword(data) {
        await this.page.locator(this.createPassField).type(data)
    }

    async confirmPassword(data) {
        await this.page.locator(this.confirmPass).type(data)
    }

    async submit() {
        await this.page.locator(this.submitBtn).click()
    }

    async signUp(){
        await this.fillFullName(info.fullName)
        await this.fillPhoneNumber(info.phoneNumber)
        await this.clearField(this.emailFiled)
        await this.page.locator(this.emailFiled).type(info.email)
        await this.clearField(this.createPassField)
        await this.page.locator(this.createPassField).type(info.createPass)
        await this.clearField(this.confirmPass)
        await this.page.locator(this.confirmPass).type(info.createPass)
        await super.isEnabled()
        await this.page.locator(this.submitBtn).click()
    }
}

module.exports = SignInPage;
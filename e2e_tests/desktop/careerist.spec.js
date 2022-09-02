/*
const LoginPage = require('../../pages/login.page');
const SignInPage = require('../../pages/signIn.page');
const Assertions = require('../../pages/assertions');
const {studentData} =require("../../support/test.data");


const {test, expect} = require('@playwright/test');

test.describe('Checking student adding flow', () => {

    test('Check that student is successfully added', async ({page}) => {
        const loginPage = new LoginPage(page);
        const assert = new Assertions(page);
        const signInPage = new SignInPage(page);
        const info = studentData();


        await loginPage.visit('https://app.rc.careerist.com')
        await page.waitForLoadState('load')
        await loginPage.login()
        await page.waitForLoadState('load')
        await loginPage.signIn()
        await page.waitForLoadState('load')
        // await expect(page).toHaveURL('https://app.rc.careerist.com/auth/register')
        await assert.isDisabled()
        await signInPage.fillEmail(info.invalidEmail)
        await assert.emailMessage()
        await signInPage.fillInPassword(info.invalidPass)
        await assert.passMessage()
        await signInPage.fillInPassword(info.createPass)
        await signInPage.confirmPassword(info.createPass + 1)
        await assert.confirmPassMessage()
        await signInPage.signUp()
        await page.waitForLoadState('load')
        // await expect(page).toHaveURL('https://app.rc.careerist.com/auth/success')
        await page.screenshot({path: 'screenshots/student1.png'})
    })
})
*/

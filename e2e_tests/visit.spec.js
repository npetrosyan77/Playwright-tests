const LoginPage = require('../pages/login.page');
const SignInPage = require('../pages/signIn.page');
const Assertions = require('../pages/assertions');
import {studentData} from "../support/test.data";


const {test, expect} = require('@playwright/test');

test.describe('Checking student adding flow', () => {

    test('Check that student is successfully added', async ({page}) => {
        const loginPage = new LoginPage(page);
        const signInPage = new SignInPage(page);
        const assertions = new Assertions(page);
        const info = studentData();


        await loginPage.visit('/')
        await page.waitForLoadState('load')
        await loginPage.login()
        await page.waitForLoadState('load')
        await page.mouse.click(100, 1000)
        await loginPage.signIn()
        await page.waitForLoadState('load')
        await expect(page).toHaveURL('https://app.rc.careerist.com/auth/register')
        await assertions.isDisabled()
        await signInPage.fillEmail(info.invalidEmail)
        await assertions.emailMessage()
        await signInPage.fillInPassword(info.invalidPass)
        await assertions.passMessage()
        await signInPage.fillInPassword(info.createPass)
        await signInPage.confirmPassword(info.createPass + 1)
        await assertions.confirmPassMessage()

        await signInPage.fillFullName(info.fullName)
        await signInPage.fillPhoneNumber(info.phoneNumber)
        await signInPage.clearField(signInPage.emailFiled)
        await signInPage.fillEmail(info.email)
        await signInPage.clearField(signInPage.createPassField)
        await signInPage.fillInPassword(info.createPass)
        await signInPage.clearField(signInPage.confirmPass)
        await signInPage.confirmPassword(info.createPass)
        await assertions.isEnabled()
        await signInPage.submit()
        await page.waitForLoadState('load')
        await expect(page).toHaveURL('https://app.rc.careerist.com/auth/success')
        await page.screenshot({path: 'screenshots/student1'})

    })
})
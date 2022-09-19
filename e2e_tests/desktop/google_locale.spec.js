const LoginPage = require('../../pages/login.page');
const {findLocale} = require("../../support/functions");
const {test, expect} = require('@playwright/test');

test.describe('Working with locales', () => {
    test.use({
        geolocation: {
            latitude: 40.9599037,
            longitude: 44.6403265
        },
        locale: 'ru-RU'
    });

    test('Check that Google is opened in configured locale language', async ({page}) => {
        const login = new LoginPage(page);

        await login.visit('https://www.google.com/')
        const country = await page.locator('.FPdoLc.lJ9FBc .RNmpXc').getAttribute('value')
        await findLocale(country, 1040, 1103)
        await page.screenshot({path: "locale.png"})
    })


    test("Check that new error is thrown when Google isn't opened in configured locale language", async ({page}) => {
        const login = new LoginPage(page);

        await login.visit('https://www.google.com/')
        const lang = await page.locator('html[lang]').getAttribute('lang')
        await expect(lang).toContain('ru')
        await page.screenshot({path: "locale1.png"})

    })
})


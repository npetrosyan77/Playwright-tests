const LoginPage = require('../../pages/login.page');
const {test, expect} = require('@playwright/test');

test.describe('Emulating mobile devices', () => {
    test.use({
        viewport: {width: 390, height: 664},
        deviceScaleFactor: 3,
        hasTouch: true,
        geolocation: {
            latitude: 56.2919384,
            longitude: 43.786086
        },
        permissions: ['geolocation'],
        locale: 'ru-RU'
    });


    test('Check navigation to the page via iPhone12', async ({page}) => {
        const login = new LoginPage(page);

        await login.visit('https://www.google.com/maps')
        await page.locator('.sVuEFc #sVuEFc').click()
        await page.waitForLoadState('load')
        await page.locator('.sVuEFc #sVuEFc').click()
        await page.pause()
   })
})

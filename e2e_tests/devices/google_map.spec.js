const LoginPage = require('../../pages/login.page');
const {test, expect} = require('@playwright/test');

test.describe('Emulating mobile devices', () => {
    test.use({
        viewport: {width: 390, height: 664},
        deviceScaleFactor: 3,
        hasTouch: true,
        geolocation: {
            latitude: 51.5007292,
            longitude: -0.1246254
        },
        permissions: ['geolocation'],
    });


    test('Check navigation to the page via iPhone12', async ({page}) => {
        const login = new LoginPage(page);


        await login.visit('https://www.google.com/maps')
        await page.waitForLoadState('load')
        await page.locator('.sVuEFc #sVuEFc').click({force: true})
        await page.waitForLoadState('load')
        // await expect(page).toHaveURL('https://www.google.com/maps/@51.5007273,-0.1246387,16z')
   })
})


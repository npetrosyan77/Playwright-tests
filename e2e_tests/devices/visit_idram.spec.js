const LoginPage = require('../../pages/login.page');
const {test} = require('@playwright/test');

test.describe('Emulating mobile devices', () => {
    test.use({
        viewport: {width: 390, height: 664},
        deviceScaleFactor: 3,
        hasTouch: true,
    });

    test('Check navigation to the page via iPhone12', async ({page}) => {
        const login = new LoginPage(page);

        await login.visit('https://www.idram.am')
        await page.waitForLoadState('load')
        await page.screenshot({path: 'idram1.png'})
    })
})





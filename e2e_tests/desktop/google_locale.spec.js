const LoginPage = require('../../pages/login.page');
const {test} = require('@playwright/test');
import {findLocale} from '../../support/functions'

test.describe('Working with locales', () => {
    test.use({
        locale: 'ru-RU'
    });

    test('Check that Google is opened in configured locale language', async ({page}) => {
        const login = new LoginPage(page);

        await login.visit('https://www.google.com/')
        const counrty = await page.innerText('.uU7dJb')
        await findLocale(counrty, 1040, 1103)
    })
})

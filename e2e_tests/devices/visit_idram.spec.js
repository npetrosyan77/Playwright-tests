const LoginPage = require('../../pages/login.page');
const { test, expect } = require('@playwright/test');


test.describe('Emulating mobile devices', ()=>{

    test('Check navigation to the page via iPhone12', async({page})=>{
        const login = new LoginPage(page);

        await login.visit('https://www.idram.am/')
        await page.waitForLoadState('load')
        await page.screenshot({path: 'idram.png'})
    })
})
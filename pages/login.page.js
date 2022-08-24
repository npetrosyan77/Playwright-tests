module.exports  = class LoginPage{
    constructor(page) {
        this.page = page;
        this.loginBtn = '.MuiList-root [href="/auth/login"] >> nth=1';
        this.signInBtn = '[href="/auth/register"]'
    }

    async visit(){
        await this.page.goto("/")
    }

    async login() {
        await this.page.locator(this.loginBtn).click()
    }

    async signIn(){
        await this.page.mouse.move(200,200);
        await this.page.mouse.down();
        await this.page.locator(this.signInBtn).click();
    }
}


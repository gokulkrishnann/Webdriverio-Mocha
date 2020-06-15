const LoginPage = require('../pages/login.page.js')
const login = new LoginPage();
describe('Login Suite', function () {
    it('invalid login', function () {
        
        login.open();
        login.enterUsername("test@test.com")
        login.enterPassword("test")
        login.clickLogin();
    })

    it('invalid email id', function () {
        login.open();
        login.enterUsername("testtilludi")
        login.enterPassword("test")
        login.clickLogin();
    })
})
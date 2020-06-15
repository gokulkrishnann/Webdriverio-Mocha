class LoginPage {

    get userNameInput() {
        return $('#session_email')
    }

    get passwordInput() {
        return $('#session_password')
    }

    get loginButton() {
        return $('[data-test="submit"]')
    }

    open() {
        browser.url("/sign_in")
    }
    enterUsername(input) {
        this.userNameInput.setValue(input)
    }

    enterPassword(input) {
        this.passwordInput.setValue(input)
    }

    clickLogin() {
        this.loginButton.click()
    }

}
module.exports = LoginPage;
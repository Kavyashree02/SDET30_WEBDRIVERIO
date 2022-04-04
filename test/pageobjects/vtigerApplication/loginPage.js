
class loginPage {
    get userTextField(){
        return $('//input[@name="user_name"]')
    }
    async enterUsename(userName){
        // await this.userTextField.waitForDisplayed()
        await this.userTextField.setValue(userName)
    }
    get passwordTextField(){
        return $('//input[@name="user_password"]')
    }
    async enterPassword(password){
        // await this.passwordTextField.waitForDisplayed()
        await this.passwordTextField.setValue(password)
    }
    get submitButton(){

        return $('#submitButton')
    }
    async clickOnSubmitBtn(){
        // await this.submitButton.waitForClickable()
        await this.submitButton.click()
    }
    async loginToApplication(url, userName, password){
        await browser.url(url)
        await this.enterUsename(userName)
        await this.enterPassword(password)
        await this.clickOnSubmitBtn()
    }
    
}
module.exports = new loginPage()
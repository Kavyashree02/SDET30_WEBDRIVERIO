const { assert } = require("chai");
var lp = require("./test/pageobjects/vtigerApplication/loginPage.js")
describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle',async () => {

        lp.loginToApplication("admin", "admin")
        wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });
});
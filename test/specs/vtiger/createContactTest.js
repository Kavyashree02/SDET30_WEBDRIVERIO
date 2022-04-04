var cp = require("../../pageobjects/vtigerApplication/contactPage")
var  hp = require("../../pageobjects/vtigerApplication/homePage")
var ccp = require("../../pageobjects/vtigerApplication/createContactPage")

describe('ContactModule', () => {
    it('createContact',async () => {
        await hp.clickOnContactLnk()
        await cp.clickOnCreateContLookUpImg()
        await ccp.createNewContact("abc")

    });
    
});
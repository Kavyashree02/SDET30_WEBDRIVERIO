var cp = require("../../pageobjects/vtigerApplication/contactPage")
var  hp = require("../../pageobjects/vtigerApplication/homePage")
var ccp = require("../../pageobjects/vtigerApplication/createContactPage")
let excelData = require("../../../genericUtility/excelUtility")
let ran = require("../../../genericUtility/webDriverUtility")

describe('ContactModule', () => {
    it('createContact',async () => {
        var excelArray = excelData("./projectData.xlsx", "Contact")
        await hp.clickOnContactLnk()
        await cp.clickOnCreateContLookUpImg()
        await ccp.createNewContact(excelArray[0].lastName+ran())

    });
    
});
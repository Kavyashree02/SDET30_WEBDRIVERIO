
var hp = require("../../pageobjects/vtigerApplication/homePage")
var op = require("../../pageobjects/vtigerApplication/organizationPage")
var cop = require("../../pageobjects/vtigerApplication/createOrganizationPage")

describe('OrganizationModule', () => {
    it('orgWithIndType', async() => {
        //await browser.refresh()
        await hp.clickOnOrganizationLnk()
        //await browser.back()
        //await browser.forward()
        await op.clickOnCreateOrgLookUpImg()
        await cop.createOrgWithIndDropDwn("ICICI", "Telecommunications") 

        //org verification
        
            
    });
    
});
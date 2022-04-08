
var hp = require("../../pageobjects/vtigerApplication/homePage")
var op = require("../../pageobjects/vtigerApplication/organizationPage")
var cop = require("../../pageobjects/vtigerApplication/createOrganizationPage")
var excelData = require("../../../genericUtility/excelUtility")
var ran = require("../../../genericUtility/webDriverUtility")

describe('OrganizationModule', () => {
    it('orgWithIndType', async() => {
        //await browser.refresh()
        await hp.clickOnOrganizationLnk()
        //await browser.back()
        //await browser.forward()
        await op.clickOnCreateOrgLookUpImg()
        var excelArray= excelData("./projectData.xlsx", "OrgName")
        await cop.createOrgWithIndDropDwn(excelArray[0].orgName+ran(), excelArray[0].Industry) 

        //org verification
        
            
    });
    
});
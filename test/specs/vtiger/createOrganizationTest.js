//const { assert } = require("chai");

let hp = require("../../pageobjects/vtigerApplication/homePage")
let op = require("../../pageobjects/vtigerApplication/organizationPage")
let cop = require("../../pageobjects/vtigerApplication/createOrganizationPage")
let excelData = require("../../../genericUtility/excelUtility");
let ran = require("../../../genericUtility/webDriverUtility")


describe('organizationModule', () => {
    it('createOrganization', async() => {
        await hp.clickOnOrganizationLnk()  
        await op.clickOnCreateOrgLookUpImg()
        var excelArray= excelData("./projectData.xlsx", "OrgName")
        await cop.createNewOrg(excelArray[1].orgName+ran())
               
    });
    
});
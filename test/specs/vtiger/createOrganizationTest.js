//const { assert } = require("chai");

var hp = require("../../pageobjects/vtigerApplication/homePage")
var op = require("../../pageobjects/vtigerApplication/organizationPage")
var cop = require("../../pageobjects/vtigerApplication/createOrganizationPage")
let excelData = require("../../../genericUtility/excelUtility")

describe('organizationModule', () => {
    it('createOrganization', async() => {
        await hp.clickOnOrganizationLnk()  
        await op.clickOnCreateOrgLookUpImg()
        await cop.createNewOrg("SBI")
       
    });
    
});
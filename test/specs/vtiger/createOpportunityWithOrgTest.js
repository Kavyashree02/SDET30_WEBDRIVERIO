let hp = require("../../pageobjects/vtigerApplication/homePage")
let orgPage = require("../../pageobjects/vtigerApplication/organizationPage")
let createOrg = require("../../pageobjects/vtigerApplication/createOrganizationPage")
let op = require("../../pageobjects/vtigerApplication/opportunitiesPage")
let cop = require("../../pageobjects/vtigerApplication/createOpportunitiesPage")

//let excel = require("../../../genericUtility/excelUtility")
//const readDataFromExcel = require("../../../genericUtility/excelUtility")

describe('Opportunities', () => {
    it('createOpportunitiesWithOrgName', async() => {
        //readDataFromExcel("~$projectData.xlsx","Sheet1")
        await hp.clickOnOrganizationLnk()
        await orgPage.clickOnCreateOrgLookUpImg()
        await createOrg.createNewOrg("ICICI2")
        await hp.clickOnOpportunitiesLnk()
        await op.opportunitiesLookUpImg()
        await cop.createOpportunityWithOrgName("Pulsar1","ICICI2")
        
    });
    
});
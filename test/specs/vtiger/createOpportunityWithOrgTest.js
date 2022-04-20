let hp = require("../../pageobjects/vtigerApplication/homePage")
let orgPage = require("../../pageobjects/vtigerApplication/organizationPage")
let createOrg = require("../../pageobjects/vtigerApplication/createOrganizationPage")
let op = require("../../pageobjects/vtigerApplication/opportunitiesPage")
let cop = require("../../pageobjects/vtigerApplication/createOpportunitiesPage")
let excelData = require("../../../genericUtility/excelUtility")
let ran = require("../../../genericUtility/webDriverUtility")


let orgName = require("../../../test/data/orgName.json")
let opporName = require("../../../test/")
// let  orgName = excelData('./projectData.xlsx', 'OrgName')
// let opporName = excelData('./projectData.xlsx', 'Opportunities')

// console.log(orgName[0].orgName+ran());
// console.log(opporName[0].OpportunityName);


describe('Opportunities', () => {
    it('createOpportunitiesWithOrgName', async() => {
        let orgName = excelData("./projectData.xlsx",'OrgName')
        console.log(orgName);
        let opporName = excelData("./projectData.xlsx",'Opportunites')
        console.log(opporName);
        await hp.clickOnOrganizationLnk()
        await orgPage.clickOnCreateOrgLookUpImg()
        await createOrg.createNewOrg(orgName[0].orgName+ran())
        await hp.clickOnOpportunitiesLnk()
        await op.clickOnOpportLookUpImg()
        // let oppName=opporName[0].OpportunityName
        // let org =orgName[0].orgName+ran()
        // console.log("===============name_oppertunity=================="+opporName[0].OpportunityName);
        await cop.createOpportunityWithOrgName(oppName,org)
      
    });
    
});
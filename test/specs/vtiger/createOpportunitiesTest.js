var hp = require("../../pageobjects/vtigerApplication/homePage")
var op = require("../../pageobjects/vtigerApplication/opportunitiesPage")
let cop = require("../../pageobjects/vtigerApplication/createOpportunitiesPage")
let excelData = require("../../../genericUtility/excelUtility")
let ran = require("../../../genericUtility/webDriverUtility")

describe('OpportunitiesModule', () => {
    it('createOpportunity', async() => {
        
        await hp.clickOnOpportunitiesLnk()
        await op.clickOnOpportLookUpImg()
        let excelArray = excelData("./projectData.xlsx","Opportunities")
        await cop.createNewOpportunity(excelArray[0].OpportunityName+ran())

        //await cop.createNewOpportunity("Honda")
        
    });
    
});
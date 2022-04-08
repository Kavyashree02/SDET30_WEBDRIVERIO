let hp = require("../../pageobjects/vtigerApplication/homePage")
let cp = require("../../pageobjects/vtigerApplication/campaignsPage")
let ccp = require("../../pageobjects/vtigerApplication/createCampaignPage")
let excelData = require("../../../genericUtility/excelUtility")
let ran = require("../../../genericUtility/webDriverUtility")

describe('CampaignsModule', () => {
    it('createCampaign', async() => {
        let excelArray = excelData("./projectData.xlsx", "Campaign")

        await hp.clickOnMoreLnk()
        await hp.clickOnCampaignsLnk()
        await cp.clickOnCampLookUpImg
        await ccp.createCampaign(excelArray[0].CampaignName+ran())
        
    });
    
});
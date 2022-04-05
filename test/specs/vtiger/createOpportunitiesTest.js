var hp = require("../../pageobjects/vtigerApplication/homePage")
var op = require("../../pageobjects/vtigerApplication/opportunitiesPage")
let cop = require("../../pageobjects/vtigerApplication/createOpportunitiesPage")

describe('OpportunitiesModule', () => {
    it('createOpportunity', async() => {
        await hp.clickOnOpportunitiesLnk()
        await op.opportunitiesLookUpImg()
        await cop.createNewOpportunity("Honda")
        
    });
    
});
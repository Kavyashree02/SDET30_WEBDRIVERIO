var hp = require("../../pageobjects/vtigerApplication/homePage")
var op = require("../../pageobjects/vtigerApplication/opportunitiesPage")

describe('OpportunitiesModule', () => {
    it('createOpportunity', async() => {
        await hp.clickOnOpportunitiesLnk()
        await op.opportunitiesLookUpImg()
        
    });
    
});
var hp = require("../../pageobjects/vtigerApplication/homePage")
var cp = require("../../pageobjects/vtigerApplication/campaignsPage")
var ccp = require("../../pageobjects/vtigerApplication/createCampaignPage")
var cpp = require("../../pageobjects/vtigerApplication/createProductPage")
var pp = require("../../pageobjects/vtigerApplication/productsPage")

describe('CampaignsModule', () => {
    it('createCampaign', async() => {
       await hp.clickOnProductsLnk()
       await pp.Product()
       await cpp.createProduct("Redmi1")
       await hp.clickOnMoreLnk()
       await hp.clickOnCampaignsLnk()
       await cp.clickOnCampLnk()
       await ccp.createCampaign("Hello1")
        
    });
    
});
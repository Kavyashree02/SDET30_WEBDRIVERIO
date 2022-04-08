let hp = require("../../pageobjects/vtigerApplication/homePage")
let cp = require("../../pageobjects/vtigerApplication/campaignsPage")
let ccp = require("../../pageobjects/vtigerApplication/createCampaignPage")
let cpp = require("../../pageobjects/vtigerApplication/createProductPage")
let pp = require("../../pageobjects/vtigerApplication/productsPage")
let excelData = require("../../../genericUtility/excelUtility")
let ran = require ("../../../genericUtility/webDriverUtility")

describe('CampaignsModule', () => {
    it('createCampaignWithProd', async() => {
       let camp = excelData("./projectData.xlsx","Campaign")
       let product = excelData("./projectData.xlsx","Product")
       await hp.clickOnProductsLnk()
       await pp.Product()
       await cpp.createProduct(product[0].ProductName+ran())
       await hp.clickOnMoreLnk()
       await hp.clickOnCampaignsLnk()
       await cp.clickOnCampLookUpImg()
       
       await ccp.createCampaign(camp[0].CampaignName+ran())
        
    });
    
});
let hp = require("../../pageobjects/vtigerApplication/homePage")
let pp = require("../../pageobjects/vtigerApplication/productsPage")
let cpp = require("../../pageobjects/vtigerApplication/createProductPage");
let ran = require("../../../genericUtility/webDriverUtility")
let excelData = require("../../../genericUtility/excelUtility")

describe('ProductsModule', () => {
    it('createProduct', async() => {
        let excelArray = excelData("./projectData.xlsx", "Product")
        await hp.clickOnProductsLnk()
       await pp.Product()
       await cpp.createProduct(excelArray[0].ProductName+ran())
        
    });
    
});
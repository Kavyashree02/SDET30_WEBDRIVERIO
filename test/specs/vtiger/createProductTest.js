var hp = require("../../pageobjects/vtigerApplication/homePage")
var pp = require("../../pageobjects/vtigerApplication/productsPage")
var cpp = require("../../pageobjects/vtigerApplication/createProductPage");
const createContactPage = require("../../pageobjects/vtigerApplication/createContactPage");

describe('ProductsModule', () => {
    it('createProduct', async() => {
        await hp.clickOnProductsLnk()
       await pp.Product()
       await cpp.createProduct("Redmi")
        
    });
    
});
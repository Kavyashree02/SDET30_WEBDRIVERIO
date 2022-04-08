class createProd{

    get product(){
        return $("//input[@name='productname']")
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createProduct(ProductName){
        await this.product.setValue(ProductName)
        await this.saveBtn.click()
    }

}

module.exports = new createProd()
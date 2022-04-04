class prodPage{

    get createProd(){
        return $("//img[@alt='Create Product...']")
    }

    async Product(){
        await this.createProd.click()
    } 
}

module.exports = new prodPage()
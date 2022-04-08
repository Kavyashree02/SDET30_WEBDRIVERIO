class opportunities{
    get opportunitiesEdt(){
        return $("//img[@alt='Create Opportunity...']")
    }

    async clickOnOpportLookUpImg(){
        await this.opportunitiesEdt.click()
    }

}

module.exports = new opportunities()
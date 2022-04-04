class opportunities{
    get opportunitiesEdt(){
        return ("//img[@alt='Create Opportunity...']")
    }

    async opportunitiesLookUpImg(){
        await this.opportunitiesEdt.click()
    }

}

module.exports = new opportunities()
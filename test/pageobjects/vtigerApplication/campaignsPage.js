class campaignsPage{
    get createCampaign(){
        return $("//img[@alt='Create Campaign...']")
    }

    async clickOnCampLookUpImg(){
        await this.createCampaign.click()
    }

}

module.exports = new campaignsPage()
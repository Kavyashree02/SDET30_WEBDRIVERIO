class campaignsPage{
    get createCampaign(){
        return $("//img[@alt='Create Campaign...']")
    }

    async clickOnCampLnk(){
        await this.createCampaign.click()
    }

}

module.exports = new campaignsPage()
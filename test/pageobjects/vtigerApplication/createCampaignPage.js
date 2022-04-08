class createCampaignPage{

    get campaignTextField(){
        return $("//input[@name='campaignname']")
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createCampaign(CampaignName){
        await this.campaignTextField.setValue(CampaignName)
        await this.saveBtn.click()
    }

    async createCampWithProduct(CampaignName,ProductName){
        await this.campaignTextField.setValue(CampaignName)
        
        await this.saveBtn.click()

    }

}

module.exports = new createCampaignPage() 
class createCampaignPage{

    get campaignTextField(){
        return $("//input[@name='campaignname']")
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createCampaign(){
        await this.campaignTextField.setValue("xgbddf")
        await this.saveBtn.click()
    }

}

module.exports = new createCampaignPage() 
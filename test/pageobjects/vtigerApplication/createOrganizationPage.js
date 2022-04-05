class createOrgPage {

    get createOrg() {
        return $('//input[@name="accountname"]')
    }

    get industryDropDwn(){
        return $("//select[@name='industry']")
    }
    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }
     
    //
    async createNewOrg(OrgName){
        await this.createOrg.setValue(OrgName)
        await this.saveBtn.click()
    } 

    async createOrgWithIndDropDwn(OrgName, Industry){
        await this.createOrg.setValue(OrgName+Math.random())
        //await this.industryDropDwn.selectByIndex(Industry)
        await this.industryDropDwn.selectByAttribute("value",Industry)
        await this.saveBtn.click()
    }

}

module.exports = new createOrgPage()

 
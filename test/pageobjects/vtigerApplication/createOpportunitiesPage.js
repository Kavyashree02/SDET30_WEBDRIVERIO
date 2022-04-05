class createOpportunity{

    get opportEdtText(){
        return $("//input[@name='potentialname']")
    }

    get relatedToLookUpImg(){
        return $("//input[@name='related_to_display']//following-sibling::img[@title='Select']")
    }

    get searchEdtText(){
        return $("//input[@name='search_text']")
    }

    get searchBtn(){
        return $("//input[@name='search']")
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
        }

 async createNewOpportunity(opportunityName)
 {
     await this.orgEdtText.setValue(opportunityName+Math.random())
     await this.saveBtn.click()
 }

 async createOpportunityWithOrgName(opportunityName,OrgName){
     await this.opportEdtText.setValue(opportunityName)
     await this.relatedToLookUpImg.click()
     await browser.switchWindow("Accounts")
     await this.searchEdtText.setValue(OrgName)
     await this.searchBtn.click()
     await browser.$(("//a[.='"+OrgName+"']")).click()
     //a[.='HDFC123']
     await browser.switchWindow("Potentials&action")
     await this.saveBtn.click()
 }


}

module.exports = new createOpportunity()
class HomePage {

    get adminImage(){
        return $('//img[@src="themes/softed/images/user.PNG"]')
    }

    get organizationLnk(){
        return $("(//a[.='Organizations'])[1]")
        }

    get contactLnk(){
        return $("//a[.='Contacts']")
    }    

    get moreLnk(){
        return $("//a[.='More']")
    }

    get campaignsLnk(){
        return $("//a[@name='Campaigns']")
    }
    get SignOutLink(){
        return $("//a[. = 'Sign Out']")
    }

    get productsLnk(){
        return $("//a[.='Products']")
    }

    get opportunitiesLnk(){
        return $("//a[.='Opportunities']")
    }


    //
    async hoverOnAdminImage(){
        await this.adminImage.waitForDisplayed()
        await this.adminImage.moveTo()
    }
    
    async clickOnSignOutLink(){
        await this.SignOutLink.waitForDisplayed()
        await this.SignOutLink.click()
    }

    async clickOnOrganizationLnk(){
        await this.organizationLnk.waitForDisplayed()
        await this.organizationLnk.click()
    }

    async clickOnContactLnk(){
        await this.contactLnk.waitForDisplayed()
        await this.contactLnk.click()
    }

    async clickOnMoreLnk(){
        await this.moreLnk.click()
    }

    async clickOnCampaignsLnk(){
        await this.campaignsLnk.click()
    }

    async clickOnProductsLnk(){
        await this.productsLnk.click()
    }

    async clickOnOpportunitiesLnk(){
        await this.opportunitiesLnk.click()
    }
 
    async logoutFromApplication(){
        await this.hoverOnAdminImage()
        await this.clickOnSignOutLink()
    }

}
module.exports = new HomePage()
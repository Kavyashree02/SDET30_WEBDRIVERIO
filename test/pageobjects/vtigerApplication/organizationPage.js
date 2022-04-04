class OrganizationPage{

    get createOrg(){
        return $("//img[@alt='Create Organization...']")
    }

    async clickOnCreateOrgLookUpImg(){
        await this.createOrg.click()
    }
}

module.exports =new OrganizationPage()
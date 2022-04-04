class ContactPage{
    get createContact(){
        return $("//img[@title='Create Contact...']")
    }

    async clickOnCreateContLookUpImg(){
        await this.createContact.click()
    }

}

module.exports = new ContactPage()
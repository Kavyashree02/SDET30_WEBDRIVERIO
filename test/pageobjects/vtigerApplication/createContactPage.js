class createContactPage{

    get createCont(){
        return $("//input[@name='lastname']")
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createNewContact(lastName){
        await this.createCont.setValue(lastName+Math.random())
        await this.saveBtn.click()
    }
}

module.exports = new createContactPage
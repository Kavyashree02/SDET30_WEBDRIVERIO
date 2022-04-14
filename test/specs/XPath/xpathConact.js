let hp = require("../../pageobjects/vtigerApplication/homePage")

describe('xpath', () => {
    it('checkBox', async() => {
        await hp.clickOnContactLnk()
        

        let cBoxArray=await $$("//input[@name='selected_id']")
        // for (let index = 0; index < cBoxArray.length; index++) {
        //         await cBoxArray[index].click() 
        //         await browser.pause(2000)                
        // }

        // for (const element in cBoxArray) {
        //     await cBoxArray[element].click()
        //     await browser.pause(1000)
            
        //     }
        

        for (let element of cBoxArray) {
            await element.click()
            await browser.pause(2000)            
        }
    })
    })
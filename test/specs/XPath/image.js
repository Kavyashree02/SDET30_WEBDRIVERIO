describe('image', () => {
    it('imageCapture', async() => {
        await browser.url("https://www.flipkart.com/")
        await $("//button[@class='_2KpZ6l _2doB4z']").click()
        let search = await $("//input[@title='Search for products, brands and more']").setValue("Camera")
        await browser.keys("Enter")
        await $("//div[.='Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens']").click()
        await browser.switchWindow("canon-eos-m50-mark-ii-mirrorless-camera-ef-m15-45mm-stm-lens")

        let element = await $$("//img[@class='q6DClP']")
        for (const img of element) {
             await img.saveScreenshot("./screenshot"+Math.random()+".png")
            }
    
    });
    
});
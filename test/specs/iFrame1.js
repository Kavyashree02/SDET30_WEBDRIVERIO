describe('Iframe_suite', () => {
    it('Iframe', async() => {
        await browser.url("https://chercher.tech/practice/frames")
        let frame1= await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)

        let frame3= await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await $("//input[@id='a']").click()

        await browser.switchToParentFrame()
        await $("//b[@id='topic']//following-sibling::input").setValue("javascript")

        await browser.switchToFrame(null)

        let frame2= await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
        await $("//select[@id='animals']").selectByIndex(2)

        
    });
    
});
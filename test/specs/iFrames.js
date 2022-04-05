describe('iframes', () => {
    it('iFrames', async() => {
        await browser.url("https://chercher.tech/practice/frames")
        var text = $("//span[.='Not a Friendly Topic']")
        console.log(text.getText());

        let frame1=await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
       await $("//b[@id='topic']//following-sibling::input").setValue("javascript")
       
        let frame3=await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await $("#a").click()

        await browser.switchToFrame(null)

        let frame2=await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
        await $("//select[@id='animals']").selectByVisibleText("Avatar")
        
    });
    
});
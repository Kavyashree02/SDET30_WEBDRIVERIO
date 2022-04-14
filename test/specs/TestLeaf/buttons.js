describe('testLeaf', () => {
    it('buttons', async() => {
        await browser.url("http://www.leafground.com/pages/Button.html")
       

        let pos = await $("//button[@id='position']")
        console.log("=================="+pos.x);
        let color = await $("//button[@style='background-color:lightgreen']")
        console.log("========================"+color);
        //await $("//button[@id='home']").click()

        
    });
    
});
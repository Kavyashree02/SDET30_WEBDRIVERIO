describe('doubleClick', () => {
    it('doubleClickAction', async() => {
        await browser.url("http://demo.guru99.com/test/simple_context_menu.html")

        var doubleClickAction = await $("//button[.='Double-Click Me To See Alert']")
        doubleClickAction.doubleClick()
        await browser.acceptAlert()
        

        
    });
    
});
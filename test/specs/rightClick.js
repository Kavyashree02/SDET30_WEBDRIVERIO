describe('rightClick', () => {
    it('RightClick', async() => {
        await browser.url("http://demo.guru99.com/test/simple_context_menu.html")
        var myButton = await $("//span[.='right click me']")
        await myButton.click({ button: 'right' }) 
    });
    
});
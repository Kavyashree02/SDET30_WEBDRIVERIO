describe('KeyBoardFunctions', () => {
    it('enterKey', async() => {
        await browser.url("http://localhost:8888/")
        await $("//input[@name='user_name']").setValue("admin")
        await $("//input[@name='user_password']").setValue("admin")
        await browser.keys("Enter")
        
    });
    
});
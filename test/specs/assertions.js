describe('builtinAssertion', () => {
    it('validatingUrlOfThePage', () => {
        browser.url("http://localhost:8888/")
        var url = browser.getUrl()

        //external Assertion library chai
        //expect(url).to.include("8888")
        
    });
    
});
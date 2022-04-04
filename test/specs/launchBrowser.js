// describe('launch_suite', () => {
//     it('navigateToAmazon', async() => {
//         await browser.url("http://amazon.in")
//         //url validation
//         await expect(browser).toHaveUrlContaining('amazon')
//         let title = await browser.getTitle()
//         console.log("===========title_of_page======="+title);
//         //title validation
//         await expect(browser).toHaveTitleContaining('India')
        
//     });
    
// });

describe('launch_suite', () => {
    it('navigateToAmazon', async() => {
        await browser.url("http://amazon.in")
        //url validation
        await expect(browser).toHaveUrlContaining('flipkart')
        let title = await browser.getTitle()
        console.log("===========title_of_page======="+title);
        //title validation
        await expect(browser).toHaveTitleContaining('myntra')
       
    });
    
});
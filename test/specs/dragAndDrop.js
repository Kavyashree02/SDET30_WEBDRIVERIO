
describe('dragAndDrop', () => {
    it('dragAndDrp', async() => {
        await browser.url("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        let elem = await $("#box3")
        let target= await $("#box103")

       await elem.dragAndDrop(target)
       
        
    });
    
});



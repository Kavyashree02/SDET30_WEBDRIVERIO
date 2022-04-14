describe("CalendarPopUp", () => {

    it('selectCurrentDate', async() =>{

        await browser.maximizeWindow()
        await browser.url("http://www.leafground.com/pages/Calendar.html")
        await $("//input[@id='datepicker']").click()

        var d = new Date();
        var montharr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        var date = d.getDate()
        var month = montharr[d.getMonth()]
        var year = d.getFullYear()
        // let month_year = month+" "+year;

        await $("//span[text()='"+month+"']/following-sibling::span[text()='"+year+"']/ancestor::div[@id='ui-datepicker-div']/descendant::a[text()='"+date+"']").click()
        
        })
})
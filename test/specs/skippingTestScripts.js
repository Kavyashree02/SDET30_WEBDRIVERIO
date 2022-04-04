describe("test_suite",()=>{
    it("test_tc_01", ()=>{
        console.log("test_tc_01");
    })
    it.skip("test_tc_02", ()=>{
        console.log("test_tc_02");
    })
    it("test_tc_03", ()=>{
        console.log("test_tc_03");
    })
})

describe("test_suite",()=>{
    it('tc_03', () => {
        console.log("pass");        
    });
    it.skip('tc_04', () => {
        console.log("pass");
    });
})
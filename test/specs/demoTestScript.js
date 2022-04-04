//mocha snippet is used to write test script
//test suite is collection of test scripts

xdescribe("test_suite",()=>{
    it.skip("test_tc_01", ()=>{
        console.log("test_tc_01");
    })
    it("test_tc_02", ()=>{
        console.log("test_tc_02");
    })
    xit("test_tc_03", ()=>{
        console.log("test_tc_03");
    })
})

describe("test_suite",()=>{
    skip("test_tc_03", ()=>{
        console.log("test_tc_01");
    })
    it("test_tc_04", ()=>{
        console.log("test_tc_02");
    })
    it("test_tc_05", ()=>{
        console.log("test_tc_03");
    })
})
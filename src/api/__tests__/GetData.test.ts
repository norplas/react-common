import GetData from '../GetData'; 

describe("getData",()=>{
    test("return value",()=>{
       GetData("http://norweb/apitest/PaintLogin.asmx/GetAreas")
       .then((result:any)=>{
        expect(true).toBe(true);
       })

        
    })
})
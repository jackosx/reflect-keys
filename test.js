const reflectKeys = require('./reflectkeys');
const keyMirror = require('keymirror');
describe("reflectkeys", ()=>{
  const keys = 'CONST_1 CONST_2';
  it("Testing string " + keys, () =>
    expect(reflectKeys(keys)).toEqual({CONST_1:"CONST_1",CONST_2:"CONST_2"})
  );
  const multilineliteral = `CONST_1
                            CONST_2`;
  it("Testing literal " + multilineliteral, () =>
    expect(reflectKeys(multilineliteral)).toEqual({CONST_1:"CONST_1",CONST_2:"CONST_2"})
  );
});
describe("keymirror",()=>{
  it("Doing the key same test",() =>
    expect(keyMirror({CONST_1:null,CONST_2:null})).toEqual({CONST_1:"CONST_1",CONST_2:"CONST_2"})
  );
});

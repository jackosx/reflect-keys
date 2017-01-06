const reflectKeys = require('./reflect-keys');
const keyMirror = require('keymirror');
describe("reflect-keys", ()=>{
  const keys = 'CONST_1 CONST_2';
  it("Testing string " + keys, () =>
    expect(reflectKeys(keys)).toEqual({CONST_1:"CONST_1",CONST_2:"CONST_2"})
  );
});
describe("keymirror",()=>{
  it("Doing the same test",() =>
    expect(keyMirror({CONST_1:null,CONST_2:null})).toEqual({CONST_1:"CONST_1",CONST_2:"CONST_2"})
  );
});

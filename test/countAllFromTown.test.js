let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('the countAllTown function' , function(){

    it('should return"all car from town", of paarl' , function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });
});



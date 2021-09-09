let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('the countRegNumber function' , function(){

    it('should return" CA 182736,CY 523519,CJ 812328", when it is equal 3' , function(){
     assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);

    });
    it('should return " CA 182736", when it is equal 1' , function(){
        assert.equal(countRegNumber('CA 182736'), 1);
   
       });
});


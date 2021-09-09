let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('the fromWhere function' , function(){

    it('should return"CY", when its from Bellville' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return"CJ", when its from Paarl' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('should return"CA", when its from Cape Town' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should return"CC", when its from some other place' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');    
    });
});







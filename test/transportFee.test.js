let assert = require("assert");
let transportFee = require("../transportFee");


describe('the transportFee function' , function(){

    it('should return "20",  If you are travelling in morning', function(){
        assert.equal(transportFee('morning'), 'R20');
    
    });

     it('should return "10",  If you are travelling in the morning' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return "free",  If you are travelling at night' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});


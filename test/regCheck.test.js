let assert = require("assert");
let regCheck = require("../regCheck");


describe('the regCheck function' , function(){

    it('should return"its from GP", when it is equal to DC 55 YU GP' , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('should return"Not from GP", when it is equal to DC 55 YU EC' , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
    it('should return"its from L", when it is equal to 5566 L' , function(){
        assert.equal(true, regCheck('5566 L', 'L'));
    });
    it('should return"Its from EC", when it is equal to ERT 123 EC' , function(){
        assert.equal(true, regCheck('ERT 123 EC', 'EC'));
    });
    it('should return"Not from MP", when it is equal to FGT 123 MM' , function(){
        assert.equal(false, regCheck('FGT 123 MM', 'MP'));
    });

});




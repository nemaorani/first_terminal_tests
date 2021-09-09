let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('the isFromBellville function' , function(){

    it('should return"true", when its from BellVille' , function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
});
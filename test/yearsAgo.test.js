let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('the yearsAgo function' , function(){

    it('should return"how many years ago", from the current year.' , function(){
        assert.equal(yearsAgo(1976),45);
    });

    it('should return"how many years ago", from the current year.' , function(){
        assert.equal(yearsAgo(2002),19);
    });
});



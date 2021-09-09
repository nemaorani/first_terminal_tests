let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('the findItemsOver20 function' , function(){

    it('should return"item over 20", for the itemlist' , function(){
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
        //  assert.deepEqual([2,2],[2,2]);
        
    });
    it('should return"item over 20", for the itemlist2' , function(){
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
        //  assert.deepEqual([2,2],[2,2]);
        
    });

});


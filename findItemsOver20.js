module.exports = function findItemsOver20(obj){
    var arr=[];
      for(var c in obj){
      if(obj[c].qty>20) arr.push(obj[c]);
      }
      return arr;
    }
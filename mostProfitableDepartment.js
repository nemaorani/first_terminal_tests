module.exports = function mostProfitableDepartment(sales){
    const mapSales={};
    for(var i=0; i<sales.length;i++){
    mapSales[sales[i].department]=0;
    }
    var max=0;
    var maxDepartment="";
    for(var y=0; y<sales.length;y++){
      var departmentTotal = mapSales[sales[y].department]; 
      departmentTotal+= sales[y].sales;
      mapSales[sales[y].department]= departmentTotal;
      if(mapSales[sales[y].department]>max) {
        max = mapSales[sales[y].department];
        maxDepartment= sales[y].department;
      }
    }
    return maxDepartment;
    }
    
    function mostProfitableDay(sale){
    const mapDays={};
    for(var i=0; i<sale.length;i++){
    mapDays[sale[i].day]=0;
    }
    var max=0;
    var maxDay="";
    for(var y=0; y<sale.length;y++){
      var dayTotal = mapDays[sale[y].day]; 
      dayTotal+= sale[y].sales;
      mapDays[sale[y].day]= dayTotal;
      if(mapDays[sale[y].day]>max) {
        max = mapDays[sale[y].day];
        maxDay= sale[y].day;
      }
    }
    return maxDay;
    }
    
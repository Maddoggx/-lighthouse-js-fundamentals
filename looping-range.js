
function range(start, end, step){
  var someArray = [];
  if(start < end && step > 0){
    someArray.push(start);
    for(var i = 1; someArray[i - 1] + step <= end; i++){
      someArray[i] = someArray[i - 1] + step;
    } 
  }return someArray;
}
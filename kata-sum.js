let numOne = 0;
let numTwo = 0;

for(let i=0; i < data.length; i++){

if(data[i] > numOne){
 numOne = data[i];
}
}

for(let j = 0; j < data.length; j ++){
  
 if( data[j] > numTwo && data[j] < numOne){
   
    numTwo = data[j]; 
  }
}


return numOne+numTwo;


console.log(sumLargestNumbers([1, 10]));
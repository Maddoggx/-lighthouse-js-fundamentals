/* 
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	
concat([], [ 9, 7, 2 ]);
concat([ 5, 10 ], []); 
*/

const arr1 = [ 1, 2, 3 ], [ 4, 5, 6 ];
const arr2 = [ 0, 3, 1 ], [ 9, 7, 2 ];
const arr3 = [], [ 9, 7, 2 ];
const arr4 = [ 5, 10 ], [];

function concat(theArray1, theArray2) {
  var theArray3 = [ ];
  theArray3 = theArray1.concat(theArray2);
  return theArray3;
}
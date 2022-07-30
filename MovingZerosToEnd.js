/* 

Move zeros to end

---------------------------INSTRUCTIONS---------------------------------

Write an algorithm that takes an array and moves all 
of the zeros to the end, preserving the order of the other 
elements.

---------------------------EXAMPLES---------------------------------


INPUT: moveZeros([false,1,0,1,2,0,1,3,"a"]) 
OUTPUT: [false,1,1,2,1,3,"a",0,0]

---------------------------SOLUTION---------------------------------
*/


function moveZeros(arr) {
  return arr.filter(curr => curr !== 0).concat(arr.filter(curr => curr === 0))
}





// Find duplicates in O(n) time and O(n) extra space | Set 1

// Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.

// Note: The repeating element should be printed only once.

// Example: 

// Input: n=7 , array[]={1, 2, 3, 6, 3, 6, 1}
// Output: 1, 3, 6
// Explanation: The numbers 1 , 3 and 6 appears more than once in the array.


let arr = [1, 2, 3, 6, 3, 6, 1];
let myset = new Set();
let result=[]

for(let i=0;i<arr.length;i++){
    if(myset.has(arr[i])){
        // console.log(arr[i]);
        result.push(arr[i]);
    }
    else{
        myset.add(arr[i]);
    }
}
console.log(result);

// Find the Missing Number
// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

// Note: There are no duplicates in the list.

// Examples: 

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , N = 8
// Output: 5
// Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5


// Input: arr[] = {1, 2, 3, 5}, N = 5
// Output: 4
// Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4






// let arr=[2,4,6,10];
// let n=5
// for(let i=0;i<n-2;i++){               // n-2 used because the elements in arr will go out of bound
    // if(arr[i+1]-arr[i] != 1){
        // missnum=arr[i]+1;
    // }
// }
// console.log(missnum);






let arr = [1, 2, 4, 6, 3, 7, 8];
let N = 8;

let formula = (N * (N + 1)) / 2;
let sumOfArr = 0;
for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
}

let missingNumber = formula - sumOfArr;

console.log(missingNumber);


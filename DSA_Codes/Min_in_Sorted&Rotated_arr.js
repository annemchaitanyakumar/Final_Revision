// Minimum in a Sorted and Rotated Array

// Given a sorted array arr[] (may be distinct or may contain duplicates) of size N that is rotated at some unknown point, the task is to find the minimum element in it. 

// Examples: 

// Input: arr[] = {5, 6, 1, 2, 3, 4}
// Output: 1
// Explanation: 1 is the minimum element present in the array.

// Input: arr[] = {1, 2, 3, 4}
// Output: 1

// Input: arr[] = {2, 1}
// Output: 1


let arr = [8,1, 2, 3, 4];
let flag=0;
 for(let i=0;i<arr.length;i++){
     if(arr[i+1]>arr[i]){
         flag=1;
         console.log(arr[i]);
         break;
     }
 }
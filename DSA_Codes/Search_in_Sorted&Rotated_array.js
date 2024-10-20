// Search in a sorted and rotated Array

// Given a sorted and rotated array arr[] of n distinct elements, the task is to find the index of given key in the array. If the key is not present in the array, return -1.

// Example:  

// Input  : arr[] = {4, 5, 6, 7, 0, 1, 2}, key = 0
// Output : 4


// Input  : arr[] = { 4, 5, 6, 7, 0, 1, 2 }, key = 3
// Output : -1


// Input : arr[] = {50, 10, 20, 30, 40}, key = 10   
// Output : 1




let arr = [4, 5, 6, 7, 10, 1, 2];
let key = 7;
let flag=0;
for(let i=0;i<arr.length;i++){
    if (arr[i] == key){
        console.log(i);
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("-1");
}
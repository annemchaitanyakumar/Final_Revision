let arr = [1, 2, 3, 4, 5];
let d = 2;
let n = arr.length;

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

reverse(arr, 0, n - 1);       //reverse total arr 
reverse(arr, 0, n - d - 1);   // reversing arr till (n-d-1) end point from 0
reverse(arr, n - d, n - 1);   // reversing arr till (n-1) end point from (n-d) starting point

console.log(arr);

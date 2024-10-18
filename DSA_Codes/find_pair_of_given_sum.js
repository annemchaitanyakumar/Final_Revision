let arr = [2, 6, 5, 8, 11];
let n = arr.length;
let target = 14;
let start = 0;
let end = n - 1;

arr.sort((a, b) => a - b);

let found = false;

while (start < end) {
    let sum = arr[start] + arr[end];
    
    if (sum === target) {
        console.log("True");
        found = true;
        break;
    } else if (sum < target) {
        start++;
    } else {
        end--;
    }
}

if (found==false) {
    console.log("False");
}

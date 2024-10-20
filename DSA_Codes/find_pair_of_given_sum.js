// Pair with given Sum (Two Sum)


// Given an array arr[] of n integers and a target value, 
// the task is to find whether there is a pair of elements in the array whose sum is equal to target. 
// This problem is a variation of 2Sum problem.

let arr = [2, 6, 5, 8, 11];

let n = arr.length;
let target = 14;
let start = 0;
let end = n - 1;

arr.sort((a, b) => b-a );          //[2,4,6,9,11]  14>18   let arr = [2, 6, 5, 8, 11];    
let found = false;

while(start<end) {                 // 0<4   1<4  2<4  3<4 for(let i=start;i<end;){ } while(start<n-1 && end>0)
    let sum = arr[start] + arr[end];        //2+11=13 //5+11=16   //end=3,start=2
                                            //15>14
    if (sum === target) {
        console.log("True");            // 0<4 2+11=13 13<14 start++
        found = true;                   //1<4 4+11=15<14 end--
        break;                          //1<3 4+9=13<14 start++
    } else if (sum < target) {          //2<3 6+9=15>14 end--
        start++;                        //2<=2 
    } else {
        end--;
    }
}

if (found==false) {
    console.log("False");
}

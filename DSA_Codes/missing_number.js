let arr=[2,4,6,10];
let n=5
for(let i=0;i<n-2;i++){               // n-2 used because the elements in arr will go out of bound
    if(arr[i+1]-arr[i] != 1){
        missnum=arr[i]+1;
    }
}
console.log(missnum);

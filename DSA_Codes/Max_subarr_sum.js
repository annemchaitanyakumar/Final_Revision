let arr = [-21, -13, -8, -7, 8, 12, -3];
let maxsum = arr[0];
let currsum = 0;

for (let n of arr) {
  currsum += n;

  if (currsum < 0) {
    currsum = 0;
  }

  maxsum = Math.max(maxsum, currsum);
}

// if all elements are negative
if (maxsum === 0) {
  // maxsum = Math.max(...arr);        //using math.max

  //using logic for finding highest number
  maxsum=arr[0];
  for(let a=1;a<arr.length;a++){
    if(arr[a]>maxsum){
      maxsum=arr[a];
    }
  }
}


console.log(maxsum);
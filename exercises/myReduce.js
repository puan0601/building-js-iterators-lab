// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //
  var i = 0;
  if (!initialValue) {
     initialValue = arr[0];
     i = 1;
   }
  for (; i < arr.length; i++) {
    initialValue = callback(initialValue, arr[i], i, arr);
  }
  return initialValue;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
function myFilter(arr, callback) {

//  CODE INSIDE HERE   //
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      output.push(arr[i]);
    }
  }
  return output;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFilter;

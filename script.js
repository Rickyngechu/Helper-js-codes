"use strict";
//Function for getting min/max number
function minMax(arr) {
  var max = arr[0],
    min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return [min, max];
}

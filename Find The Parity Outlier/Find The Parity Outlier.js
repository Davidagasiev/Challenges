function findOutlier(integers){
  var even = [];
  var odd = [];
 for (var i = 0; i < integers.length; i++) {
  (integers[i] % 2) === 0 ? even.push(integers[i]) : odd.push(integers[i]);
 }
 switch(even.length) {
  case 1 :
  return even[0];
  break;
  default:
  return odd[0];
 }
}
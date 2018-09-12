/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
var array = preferences;
var count = 0;
let triangles = [];

array.forEach(function(value, index){
  let check = true;
  if(triangles.includes(value - 1)){
    check = false;
  }
  if (check) {
  let length = array.length;
  let secondvalue;
  let thirdvalue;
  if(checkup(value - 1, length) ){
    secondvalue = array[value - 1]; 
    if(checkup(secondvalue - 1, length) ){
      thirdvalue = array[secondvalue - 1];
      if(secondvalue === value){

        }else{
        if(thirdvalue - 1 === index){
          count++;
          triangles.push(value - 1);
          triangles.push(secondvalue - 1);
          triangles.push(thirdvalue - 1);
        }
      }
    }
  }
}
});
return count;
 
};

function checkup(index, length){
  if (index >= 0 && index < length){
    return true;
  }else{
    return false;
  } 
};

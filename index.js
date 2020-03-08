function updateObjectWithKeyandValue(object,key,value){
  let newObj = object[key] = value;
  // let copy = object.constructor();
  return newObj;
}

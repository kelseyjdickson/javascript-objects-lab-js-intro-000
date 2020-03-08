function updateObjectWithKeyandValue(object,key,value){
  object[key] = value;
  let copy = object.constructor();
  return object;
}

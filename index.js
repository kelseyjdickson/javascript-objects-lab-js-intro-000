function updateObjectWithKeyAndValue(object,key,value){
return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
}
function  deleteFromObjectByKey(object, key){

  let clone = object[key];
  delete clone;
  return clone;
}
function  destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;

}

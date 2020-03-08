function updateObjectWithKeyAndValue(object,key,value){
return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
}
function  deleteFromObjectByKey(object, key){
  let orginalObj = object[key];
  delete object[key];
  return orginalObj;
}
function  destructivelyDeleteFromObjectByKey(object, key){
  return  delete object;

}

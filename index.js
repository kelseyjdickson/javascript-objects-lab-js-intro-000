function updateObjectWithKeyAndValue(object,key,value){
return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

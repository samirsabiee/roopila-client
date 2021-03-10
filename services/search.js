export default (objectArray, stringItem) => {
  let result = Array()
  if (Array.isArray(objectArray)) {
    for (const object of objectArray) {
      result.push(searchInObjectValues(object, stringItem))
    }
    return new Array(result)
  } else {
    throw new Error('objectArray is Not Array')
  }
}

function searchInObjectValues(object, stringItem) {
  for (const key in object) {

    if (isObject(object[key])){
      return searchInObjectValues(object[key],stringItem.trim())
    }
    if (Array.isArray(object[key].toString().match(new RegExp(stringItem.trim())))) {
      return object
    }
  }
}

function isObject(object) {

  if ((typeof object === "object" || typeof object === 'function') && (object !== null))
    return true
  return false

}

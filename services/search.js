export default (source, needle) => {
  let result = Array()
  if (Array.isArray(source)) {
    for (const object of source) {
      result.push(searchInObjectValues(object, needle))
    }
    return new Array(result)
  } else {
    throw new Error('Source is Not Array')
  }
}

function searchInObjectValues(object, needle) {
  needle = needle.trim()
  for (const key in object) {

    if (isObject(object[key])){
      return searchInObjectValues(object[key],needle)
    }
    if (Array.isArray(object[key].toString().match(new RegExp(needle)))) {
      return object
    }
  }
}

function isObject(object) {

  if ((typeof object === "object" || typeof object === 'function') && (object !== null))
    return true
  return false

}

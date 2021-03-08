export default (source,needle) => {
  if(Array.isArray(source)){
    for (const object of source) {
      console.log(object)
    }
  }
}

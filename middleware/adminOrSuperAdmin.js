export default function ({$auth , error}) {
  if(!superIncludes($auth.user.roles,['admin','superAdmin'])) error({statusCode:403})
}
function superIncludes (source,needle) {
  let isInclude = false
  for (const need of needle) {
    if(source.includes(need)) {
      isInclude = true
    }
  }
  return isInclude

}

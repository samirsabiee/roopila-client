export default function ({$auth , error}) {
  if(!$auth.hasScope('superAdmin')){
    error({statusCode:403})
  }
}

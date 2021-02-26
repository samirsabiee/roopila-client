export default function ({$auth , error}) {
  if(!$auth.hasScope('admin')){
    error({statusCode:403})
  }
}

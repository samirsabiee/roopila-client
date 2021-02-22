export default ({$axios, $notify, redirect, store}) => {
  $axios.onError(error => {

    $axios.setBaseURL(process.env.API_BASE_URL)
    $axios.setHeader('Accept','application/json')
    $axios.setHeader('test','test1')

    switch (error.response.status) {
      case 422: // for Validation errors
        store.dispatch('validation/setErrors', error.response.data)
        break
      case 401:
        $notify.error({
          message: 'شما احراز هویت نشده اید',
          buttons: [
            ['<button :to="/auth">ورود به حساب کاربری</button>', (instance, toast) => {
              instance.hide({
                transitionOut: 'fadeOutUp',
                onClosing: (instance, toast, closedBy) => {
                  redirect('/auth')
                }
              }, toast, 'buttonName');
            }]
          ]
        })
        break
      default:
        $notify.error({
          message: error.response.data
        })
        break
    }

    return Promise.reject(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}

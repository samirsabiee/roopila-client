<template>
  <div>
    <div class="header-height-margin-top">
      <div class="container header-height-margin-top shadow shadow-sm mb-3 p-3">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <div class="col-2 d-flex flex-row"><img class="circle-gif" src="static/img/gifs/shipping.gif" alt="shipping"></div>
          <div class="col-10 d-flex flex-column justify-content-center align-items-start">
            <h4>درخواست خود را برای ما ارسال کنیدو منتظر تماس ما باشید</h4>
          </div>
        </div>

        <hr>
        <div class="d-flex flex-column">
          <div class="d-flex flex-row m-2">
            <div class="form-group">
              <label for="fName">نام</label>
              <input type="text" class="form-control" id="fName">
            </div>
            <div class="form-group mr-2">
              <label for="lName">نام خانوادگی</label>
              <input type="text" class="form-control" id="lName">
            </div>
          </div>
          <div class="d-flex flex-row m-2">
            <div class="form-group">
              <label for="mobile">شماره تماس</label>
              <input type="text" class="form-control" id="mobile">
            </div>
            <div class="form-group mr-2">
              <label for="email">ایمیل</label>
              <input type="text" class="form-control" id="email">
            </div>
          </div>

          <div class="d-flex flex-row m-2">
            <div class="form-group">
              <label for="goodName">نام کالا</label>
              <input type="text" class="form-control" id="goodName">
            </div>
            <div class="form-group mr-2">
              <label for="goodNumber">تعدادکالا</label>
              <input type="text" class="form-control" id="goodNumber">
            </div>
            <div class="form-group mr-2">
              <label for="goodWeight">وزن کالا</label>
              <input type="text" class="form-control" id="goodWeight">
            </div>
            <div class="form-group mr-2">
              <label for="goodVolume">حجم کالا</label>
              <input type="text" class="form-control" id="goodVolume">
            </div>
          </div>

          <label>آپلود نمونه محصول</label>
          <div class="row d-flex flex-row justify-content-start m-2" id="boxRow">
            <div class="sample-box d-flex flex-row justify-content-center align-items-center">
              <img class="icon-size-medium" src="static/img/icons/plus_grey.png" alt="plus">
              <input class="inputUpload" type="file" id="inputUpload1" name="inputUpload1">
            </div>
          </div>
          <input type="submit" class="btn btn-success m-3" value="ارسال فرم">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "formRequest"
    }
</script>

<style scoped src="@/assets/css/form.css">

</style>

<template>
  <div class="container col-12">
    <div class="d-flex flex-row justify-content-around align-items-center mt-5">
      <div class="col-3 bg-light rect-box rounded p-3 d-flex flex-column justify-content-center">
        <h5>مجموع کاربران</h5>
        <h1 class="text-left">100,000</h1>
      </div>
      <div class="col-3 bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center">
        <h5>مجموع سفارشات</h5>
        <h1 class="text-left">50,000</h1>
      </div>
      <div class="col-3 bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center">
        <h5>مجموع تراکنش ها</h5>
        <h1 class="text-left">49,000</h1>
      </div>
      <div class="col-3 bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center">
        <h5>مجموع اخبار</h5>
        <h1 class="text-left">1000</h1>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-around align-items-center mt-5">
      <div class="col-6 bg-light rounded p-3">
        <h5>آخرین سفارشات</h5>
        <hr>
        <table class="table table-bordered table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>نام کالا</th>
            <th>وضعیت</th>
            <th>مشتری</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>ایفون pro</td>
            <td>خریده شده</td>
            <td>علیپور</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6 bg-light rounded p-3 mr-1">
        <h5>آخرین تراکنش ها</h5>
        <hr>
        <table class="table table-bordered table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>شماره سفارش</th>
            <th>وضعیت</th>
            <th>مبلغ</th>
            <th>پرداخت کننده</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>2545</td>
            <td>پرداخت شده</td>
            <td>31,000,000</td>
            <td>علیپور</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dashboard",
        layout:"admin"
    }
</script>

<style scoped>

</style>

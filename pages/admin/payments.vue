<template>
  <div class="d-flex flex-column justify-content-start align-items-center">
    <div class="form-group p-0 col">
      <input class="form-control" type="text" name="search" id="search" placeholder="جستجو">
    </div>
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>#</th>
        <th>شماره تراکنش</th>
        <th>شماره پیگیری</th>
        <th>شماره محصول</th>
        <th>وضعیت انجام</th>
        <th>نام پرداخت کننده</th>
        <th>مبلغ پرداختی</th>
        <th>تاریخ پرداخت</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>213225</td>
        <td>254185</td>
        <td>3652514</td>
        <td>پرداخت موفق</td>
        <td>علیپور</td>
        <td>31،000،000</td>
        <td>1399/11/08</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "payments",
    layout: "admin"
  }
</script>

<style scoped>

</style>

<template>
  <div class="d-flex flex-column justify-content-start align-items-center">
    <div class="col p-0 form-group">
      <input class="col form-control" type="text" placeholder="جستجو ...">
    </div>
    <table class="table table-striped table-bordered p-3">
      <thead>
      <tr>
        <th>#</th>
        <th>شماره سفارش</th>
        <th>وضعیت</th>
        <th>نام سفارش دهنده</th>
        <th>نام کالا</th>
        <th>تعداد</th>
        <th>قیمت استعلام</th>
        <th>قیمت نهایی</th>
        <th>عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>15142</td>
        <td>انجام شده</td>
        <td>علیپور</td>
        <td>ایفون پرو</td>
        <td>یک-1</td>
        <td>34،000،000</td>
        <td>31،000،000</td>
        <td><i class="fas fa-eye"></i></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "orders",
    layout: "admin"
  }
</script>

<style scoped>

</style>

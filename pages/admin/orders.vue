<template>
  <b-container fluid class="bg-light p-2 m-2">
    <div class="col p-0 form-group">
      <input class="col form-control" type="text" placeholder="جستجو ...">
    </div>
    <table class="table table-striped table-bordered text-center">
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
  </b-container>
</template>

<script>
  export default {
    name: "orders",
    layout: "admin"
  }
</script>

<style scoped>

</style>

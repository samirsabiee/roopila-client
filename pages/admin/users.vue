<template>
  <b-container fluid>
    <input class="form-control m-3" type="text" placeholder="جستجوی کاربر">
    <table class="table table-striped table-bordered text-center m-3">
      <thead>
      <tr>
        <th>#</th>
        <th>نام و نام خانوادگی</th>
        <th>کد ملی</th>
        <th>تعداد سفارشات</th>
        <th>عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>سمیر سبیعی</td>
        <td>3490299221</td>
        <td>20</td>
        <td><i class="fas fa-eye"></i></td>
      </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
    export default {
        name: "users",
      layout:"admin"
    }
</script>

<style scoped>

</style>

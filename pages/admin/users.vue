<template>
  <div class="d-flex flex-column justify-content-around align-items-center">
    <div class="d-flex flex-row justify-content-between align-items-start bg-light p-3 mt-3 col rounded form-group">
      <input class="form-control" type="text" placeholder="جستجوی کاربر">
    </div>
    <div class="col bg-light">
      <table class="table table-striped table-bordered">
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "users",
      layout:"admin"
    }
</script>

<style scoped>

</style>

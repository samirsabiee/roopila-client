<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-form-input class="m-3" placeholder="جستجوی کاربر"></b-form-input>
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
      </b-col>
    </b-row>
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

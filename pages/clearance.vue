<template>
    <div>
      <div class="img-container">
        <img class="col-12 img-cover-center img-height p-0 img-fluid" src="static/img/clearance.jpg" alt="clearance">
        <div class="darkLayer w-100 d-flex flex-column justify-content-center align-items-center">
          <h2 class="text-white">امورات ترخیص کالا</h2>
          <p class="text-white w-50 text-justtify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
            کاربردی می باشد</p>
          <button class="btn btn-outline-success">درخواست ترخیص</button>
        </div>
      </div>

      <h3 class="text-center p-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
      <hr class="w-75">

      <div class="d-flex flex-row justify-content-center align-items-center overflow-hidden bg-light shadow shadow-sm rounded m-5">
        <div class="col-9 bg-danger p-0 m-0">
          <img class="col-12 img-cover-center p-0 img-fluid" src="static/img/clearance2.jpg" alt="clearance">
        </div>
        <div class="col-4 d-flex flex-column clearance-features bg-light rounded p-5">
          <h5 class="text-success p-3 font-weight-bold">بخشی از گام های ترخیص کالا</h5>
          <div class="d-flex flex-row justify-content-start align-items-center mb-2 mr-3">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
                <div class="xs-circle bg-success"></div>
              </div>
            </div>
            <div class="col d-flex flex-row align-items-center">
              <span>متن گام اول</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center mb-2 mr-3">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
                <div class="xs-circle bg-success"></div>
              </div>
            </div>
            <div class="col d-flex flex-row align-items-center">
              <span>متن گام دوم</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center mb-2 mr-3">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
                <div class="xs-circle bg-success"></div>
              </div>
            </div>
            <div class="col d-flex flex-row align-items-center">
              <span>متن گام سوم</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center mr-3">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
                <div class="xs-circle bg-success"></div>
              </div>
            </div>
            <div class="col d-flex flex-row align-items-center">
              <span>متن گام چهارم</span>
            </div>
          </div>
        </div>
      </div>

      <hr class="w-75">

      <h4 class="text-center">بخشی از اصطلاحات گمرکی</h4>

      <div class="d-flex flex-row justify-content-center align-items-start">
        <table class="table table-bordered table-striped m-5">
          <tbody class="text-center">
          <tr>
            <th>اصطلاح گمرکی</th>
            <td>شرح توضیحات اصطلاح</td>
          </tr>
          <tr>
            <th>اصطلاح گمرکی</th>
            <td>شرح توضیحات اصطلاح</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "clearance"
    }
</script>

<style scoped src="@/assets/css/clearance.css">

</style>

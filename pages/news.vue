<template>
    <div>
      <div class="d-flex flex-row p-3 shadow shadow-sm w-100 header-height-margin-top fixed">
        <div class="col-4"><span>Roopila نیوز</span></div>
        <div class="col-8"></div>
      </div>
      <ul class="nav nav-tabs m-3 d-flex flex-row justify-content-center heading-height" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">همه</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">واردات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">صادرات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">اقتصادی</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="row d-flex flex-row tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
          <div v-for="index in 3" :key="index" class="news-box overflow-hidden rounded">
            <img class="img-cover-center img-fluid h-100" src="" alt="news">
            <div class="darkLayer d-flex flex-column justify-content-end align-items-start w-100 p-2">
              <h6 class="text-white border border-success p-1 category-font-size">اقتصادی</h6>
              <h5 class="text-white">عنوان خبر</h5>
              <h6 class="text-white date-font-size">تاریخ 99/11/02</h6>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab"><span>واردات</span></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">صادرات</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">اقتصادی</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style scoped src="@/assets/css/news.css">

</style>

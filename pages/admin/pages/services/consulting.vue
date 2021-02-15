<template>
  <div>
    <div id="imgContainer" class="d-flex flex-column header-height-margin-top">
      <img class="top-image w-100" src="static/img/consulting.jpg" alt="consulting">
      <div id="featureBox" class="col-2 bg-warning shadow shadow-sm p-2 d-flex flex-column align-items-center">
        <div>
          <img class="main_feature" src="static/img/icons/feature.png" alt="main feature">
        </div>
        <p v-b-modal.modal-feature-content v-text="pageContent.featureContent" class="pr-2 pl-2 justify-text pt-4rem"></p>
        <b-modal hide-footer size="lg" id="modal-feature-content">
          <b-form-textarea v-model="pageContent.featureContent"></b-form-textarea>
        </b-modal>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-start align-items-start jumbotron">
      <div class="col-6">
        <h1 v-b-modal.modal-title v-text="pageContent.title" class="text-center">عنوان مشاوره</h1>
        <b-modal hide-footer id="modal-title">
            <b-form-input v-model="pageContent.title"></b-form-input>
        </b-modal>
        <p v-b-modal.modal-mainContent v-text="pageContent.mainContent" class="p-3 justify-text"></p>
        <b-modal hide-footer size="xl" id="modal-mainContent">
            <b-form-textarea v-model="pageContent.mainContent"></b-form-textarea>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "consulting",
    layout: "admin",
    data() {
      return {
        pageContent: {
          image:'',
          title:'عنوان مشاوره',
          mainContent:'متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن' +
            '          مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره متن مشاوره ',
          featureContent:' متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی' +
            '          اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی متن ویژگی اصلی'
        }
      }
    },
  }
</script>

<style scoped src="@/assets/css/consulting.css">

</style>

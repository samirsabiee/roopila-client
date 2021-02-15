<template>
  <b-container fluid>
    <b-row class="p-3">
      <b-col cols="4">
        <b-form-group class="text-right" label="تعیین سطر اول متن روی تصویر">
          <b-form-input v-model="pageContent.part1.textLine1"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4">
        <b-form-group class="text-right" label="تعیین سطر دوم متن روی تصویر">
          <b-form-input v-model="pageContent.part1.textLine2"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4">
        <b-form-group class="text-right" label="تعیین متن دکمه ارسال درخواست">
          <b-form-input v-model="pageContent.part1.textButton"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="img-container overflow-hidden">
      <img class="img-cover-center transport-image w-100 img-fluid" src="static/img/transport.jpg" alt="transport">
      <div class="darkLayer w-100 d-flex flex-row justify-content-end align-items-center">

        <div class="col-6 d-flex flex-column justify-content-center align-items-center">
          <h1 v-text="pageContent.part1.textLine1" class="text-white">حمل و نقل</h1>
          <h3 v-text="pageContent.part1.textLine2" class="text-white"> ارسال محموله از مریخ به تمامی نقاط کشور</h3>
          <button v-text="pageContent.part1.textButton" class="btn btn-outline-success">ارسال درخواست</button>
        </div>

      </div>
    </div>

    <div class="d-flex flex-row justify-content-center align-items-center">
      <div class="col-2 transport-type-box bg-light shadow shadow-sm rounded overflow-hidden p-0">
        <img class="img-cover-center w-100 transport-box-img img-fluid" src="static/img/small-truck.jpg" alt="transport">
        <h5 v-b-modal.modal-part2-section1-title v-text="pageContent.part2.section1.title" class="font-weight-bold pt-3 pr-3 text-center">حمل نقل زمینی</h5>
        <b-modal hide-footer id="modal-part2-section1-title">
          <b-form-input v-model="pageContent.part2.section1.title"></b-form-input>
        </b-modal>
        <p v-b-modal.modal-part2-section1-content v-text="pageContent.part2.section1.content" class="pr-3 pl-3 text-center">متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم </p>
        <b-modal hide-footer size="lg" id="modal-part2-section1-content">
          <b-form-textarea v-model="pageContent.part2.section1.content"></b-form-textarea>
        </b-modal>
      </div>
      <div class="col-2 transport-type-box bg-light shadow shadow-sm rounded overflow-hidden p-0">
        <img class="img-cover-center w-100 transport-box-img img-fluid" src="static/img/small-ship.jpg" alt="transport">
        <h5 v-b-modal.modal-part2-section2-title v-text="pageContent.part2.section2.title" class="font-weight-bold pt-3 pr-3 text-center">حمل نقل دریایی</h5>
        <b-modal hide-footer id="modal-part2-section2-title">
          <b-form-input v-model="pageContent.part2.section2.title"></b-form-input>
        </b-modal>
        <p v-b-modal.modal-part2-section2-content v-text="pageContent.part2.section2.content" class="pr-3 pl-3 text-center">متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم </p>
        <b-modal hide-footer size="lg" id="modal-part2-section2-content">
          <b-form-textarea v-model="pageContent.part2.section2.content"></b-form-textarea>
        </b-modal>
      </div>
      <div class="col-2 transport-type-box bg-light shadow shadow-sm  rounded overflow-hidden p-0">
        <img class="img-cover-center w-100 transport-box-img img-fluid" src="static/img/small-airplane.jpg" alt="transport">
        <h5 v-b-modal.modal-part2-section3-title v-text="pageContent.part2.section3.title" class="font-weight-bold pt-3 pr-3 text-center">حمل نقل هوایی</h5>
        <b-modal hide-footer id="modal-part2-section3-title">
          <b-form-input v-model="pageContent.part2.section3.title"></b-form-input>
        </b-modal>
        <p v-b-modal.modal-part2-section3-content v-text="pageContent.part2.section3.content" class="pr-3 pl-3 text-center">متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم </p>
        <b-modal hide-footer size="lg" id="modal-part2-section3-content">
          <b-form-textarea v-model="pageContent.part2.section3.content"></b-form-textarea>
        </b-modal>
      </div>
    </div>

    <div class="row d-flex flex-row justify-content-center align-items-center m-3">
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <p v-b-modal.modal-part3-section1-title v-text="pageContent.part3.section1.title">معرفی روند یک</p>
        <b-modal hide-footer id="modal-part3-section1-title">
            <b-form-input v-model="pageContent.part3.section1.title"></b-form-input>
        </b-modal>
      </div>
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div v-b-modal.modal-part3-section2-title v-text="pageContent.part3.section2.title">معرفی روند دو</div>
        <b-modal hide-footer id="modal-part3-section2-title">
          <b-form-input v-model="pageContent.part3.section2.title"></b-form-input>
        </b-modal>
      </div>
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div v-b-modal.modal-part3-section3-title v-text="pageContent.part3.section3.title">معرفی روند سه</div>
        <b-modal hide-footer id="modal-part3-section3-title">
          <b-form-input v-model="pageContent.part3.section3.title"></b-form-input>
        </b-modal>
      </div>
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div v-b-modal.modal-part3-section4-title v-text="pageContent.part3.section4.title">معرفی روند چهارم</div>
        <b-modal hide-footer id="modal-part3-section4-title">
          <b-form-input v-model="pageContent.part3.section4.title"></b-form-input>
        </b-modal>
      </div>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "transport",
    layout: "admin",
    data() {
      return {
        pageContent:{
          part1:{image:'',textLine1:'حمل و نقل',textLine2:' ارسال محموله از مریخ به تمامی نقاط کشور',textButton:'ارسال درخواست'},
          part2:{
            section1:{image:'',title:'حمل و نقل زمینی',content:'متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم '},
            section2:{image:'',title:'حمل و نقل دریایی',content:'متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم '},
            section3:{image:'',title:'حمل و نقل هوایی',content:'متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم '}
          },
          part3:{
            section1:{image:'',title:'روند اول'},
            section2:{image:'',title:'روند دوم'},
            section3:{image:'',title:'روند سوم'},
            section4:{image:'',title:'روند چهارم'}
          }
        }
      }
    },
  }
</script>

<style scoped src="@/assets/css/transport.css">

</style>

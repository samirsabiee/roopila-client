<template>
  <b-container fluid>
    <b-row class="p-4">
      <b-col>
        <b-form-group class="text-right" label="تغییر متن سطر اول روی تصویر">
          <b-form-input v-model="pageContent.part1.textLine1"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group class="text-right" label="تغییر متن سطر دوم روی تصویر">
          <b-form-textarea v-model="pageContent.part1.textLine2"></b-form-textarea>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group class="text-right" label="تغییر متن دکمه درحواست ترخیص">
          <b-form-input v-model="pageContent.part1.textButton"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="img-container">
      <img class="col-12 img-cover-center img-height p-0 img-fluid" src="static/img/clearance.jpg" alt="clearance">
      <div class="darkLayer w-100 d-flex flex-column justify-content-center align-items-center">
        <h2 v-text="pageContent.part1.textLine1" class="text-white">امورات ترخیص کالا</h2>
        <p v-text="pageContent.part1.textLine2" class="text-white w-50 text-justtify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد</p>
        <button v-text="pageContent.part1.textButton" class="btn btn-outline-success">درخواست ترخیص</button>
      </div>
    </div>
    <h3 v-b-modal.modal-part2-title v-text="pageContent.part2.title"  class="text-center p-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
    <b-modal hide-footer id="modal-part2-title">
      <b-form-textarea v-model="pageContent.part2.title"></b-form-textarea>
    </b-modal>
    <hr class="w-75">
    <div class="d-flex flex-row justify-content-center align-items-center overflow-hidden bg-light shadow shadow-sm rounded m-5">
      <div class="col-9 bg-danger p-0 m-0">
        <img class="col-12 img-cover-center p-0 img-fluid" src="static/img/clearance2.jpg" alt="clearance">
      </div>
      <div class="col-4 d-flex flex-column clearance-features bg-light rounded p-5">
        <h5 v-b-modal.modal-part2-featureTitle v-text="pageContent.part2.featureTitle"  class="text-success p-3 font-weight-bold text-center">بخشی از گام های ترخیص کالا</h5>
        <b-modal hide-footer id="modal-part2-featureTitle">
          <b-form-input v-model="pageContent.part2.featureTitle"></b-form-input>
        </b-modal>
        <div class="d-flex flex-row justify-content-start align-items-center mb-2 mr-3">
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
              <div class="xs-circle bg-success"></div>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center">
            <span v-b-modal.modal-part2-feature1 v-text="pageContent.part2.feature1" >متن گام اول</span>
            <b-modal hide-footer id="modal-part2-feature1">
              <b-form-input v-model="pageContent.part2.feature1"></b-form-input>
            </b-modal>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-start align-items-center mb-2 mr-3">
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
              <div class="xs-circle bg-success"></div>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center">
            <span v-b-modal.modal-part2-feature2 v-text="pageContent.part2.feature2">متن گام دوم</span>
            <b-modal hide-footer id="modal-part2-feature2">
              <b-form-input v-model="pageContent.part2.feature2"></b-form-input>
            </b-modal>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-start align-items-center mb-2 mr-3">
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
              <div class="xs-circle bg-success"></div>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center">
            <span v-b-modal.modal-part2-feature3 v-text="pageContent.part2.feature3">متن گام سوم</span>
            <b-modal hide-footer id="modal-part2-feature3">
              <b-form-input v-model="pageContent.part2.feature3"></b-form-input>
            </b-modal>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-start align-items-center mr-3">
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="xs-circle-border d-flex flex-row justify-content-center align-items-center">
              <div class="xs-circle bg-success"></div>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center">
            <span v-b-modal.modal-part2-feature4 v-text="pageContent.part2.feature4">متن گام چهارم</span>
            <b-modal hide-footer id="modal-part2-feature4">
              <b-form-input v-model="pageContent.part2.feature4"></b-form-input>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <hr class="w-75">
    <h4 v-b-modal.modal-part3-title v-text="pageContent.part3.title" class="text-center">بخشی از اصطلاحات گمرکی</h4>
    <b-modal hide-footer id="modal-part3-title">
      <b-form-input v-model="pageContent.part3.title"></b-form-input>
    </b-modal>
    <div class="d-flex flex-row justify-content-center align-items-start">
      <table class="table table-bordered table-striped m-5">
        <tbody class="text-center">
        <tr v-for="term in pageContent.part3.customsTerm" :key="term.index">
          <th v-model="term.word">اصطلاح گمرکی</th>
          <td v-model="term.description">شرح توضیحات اصطلاح</td>
        </tr>
        </tbody>
      </table>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "clearance",
    layout: "admin",
    data() {
      return {
        pageContent:{
          part1:{
            image:'',
            textLine1:'امورات ترخیص کالا',
            textLine2:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای' +
              '          کاربردی می باشد',
            textButton:'درخواست ترخیص'
          },
          part2:{
            title:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image:'',
            featureTitle:'بخشی از گام های ترخیص کالا',
            feature1:'متن گام اول',
            feature2:'متن گام دوم',
            feature3:'متن گام سوم',
            feature4:'متن گام چهارم'
          },
          part3:{
            title:'بخشی از اصطلاحات گمرکی',
            customsTerm:[
              {word:'اصطلاح گمرکی',description:'شرح توضیحات صلاح گمرکی'},
              {word:'اصطلاح گمرکی',description:'شرح توضیحات صلاح گمرکی'},
              {word:'اصطلاح گمرکی',description:'شرح توضیحات صلاح گمرکی'}
            ]
          }
        }
      }
    },
  }
</script>

<style scoped src="@/assets/css/clearance.css">

</style>

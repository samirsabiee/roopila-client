<template>

  <b-container fluid class="p-5">
    <b-row align-v="end" class="m-0 p-0 pb-3">
      <b-col cols="3">
        <b-form-input autofocus placeholder="عنوان صفحه"></b-form-input>
      </b-col>
      <b-col cols="3">
        <b-form-input placeholder="نامک"></b-form-input>
      </b-col>
      <b-col cols="3">
        <b-form-textarea size="sm" v-model="pageContent.slider.expert" placeholder="توضیحات صفحه"></b-form-textarea>
      </b-col>
      <b-col cols="3">
        <b-form-file placeholder="آیکن"></b-form-file>
      </b-col>
    </b-row>
    <b-button block v-b-toggle.collapse-1 variant="primary">ویرایش محتوای صفحه</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-form-textarea @change="fillMovementText" @keyup="fillMovementText" v-model="inputMovementText" ></b-form-textarea>
      <div id="sliderContainer" class="col-12 p-0">
        <img class="img-fluid slider image-option w-100" src="static/img/slider.jpg" alt="slider">
        <div class="d-flex flex-column justify-content-center w-100 align-items-center">
          <div class="d-flex flex-column justify-content-start">
            <h4 id="myText" class="text-white text-right"></h4>
            <b-form-text text-variant="white" class="text-right" tag="h4"
                         v-text="pageContent.slider.expert"></b-form-text>
          </div>
        </div>
      </div>

      <div class="col-12 d-flex flex-row justify-content-between align-items-start p-0 bg-dark">
        <div class="col-5 d-flex flex-row justify-content-start align-items-start p-0">
          <span class="col-2 bg-success spanHeight m-0 p-0"></span>
          <span class="col-5 bg-success spanHeight spanStyle-start"></span>
          <span class="col-5 bg-success spanHalfHeight spanStyle-start"></span>
        </div>
        <div class="col-2 d-flex flex-row justify-content-center align-items-end heading-height">
          <h4 v-b-modal.modal-s-title v-text="pageContent.services.title" class="heading-font-family text-white"></h4>
          <b-modal hide-footer id="modal-s-title">
            <b-form-input v-model="pageContent.services.title"></b-form-input>
          </b-modal>
        </div>
        <div class="col-5 d-flex flex-row-reverse justify-content-start align-items-start p-0">
          <span class="col-2 bg-success spanHeight m-0 p-0"></span>
          <span class="col-5 bg-success spanHeight spanStyle-end"></span>
          <span class="col-5 bg-success spanHalfHeight spanStyle-end"></span>
        </div>
      </div>

      <div class="co-12 d-flex flex-row justify-content-around align-items-center">
        <div class="col-3 d-flex flex-column justify-content-center align-items-center mt-2">
          <div class="circle-div p-3 d-flex flex-row justify-content-center align-items-center">
            <div class="small-circle-div bg-warning">
              <input type="file" class="custom-file-input"/>
            </div>
          </div>
          <h4 v-b-modal.modal-s1-title v-text="pageContent.services.s1.title" class="text-center mt-2"></h4>
          <b-modal hide-footer id="modal-s1-title">
            <b-form-input v-model="pageContent.services.s1.title"></b-form-input>
          </b-modal>
          <p v-b-modal.modal-s1-content v-text="pageContent.services.s1.content" class="text-center">متن لورم اپیزوم متن
            لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم
            متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
          <b-modal hide-footer size="lg" id="modal-s1-content">
            <b-form-textarea v-model="pageContent.services.s1.content"></b-form-textarea>
          </b-modal>
        </div>
        <div class="col-3 d-flex flex-column justify-content-center align-items-center mt-2">
          <div class="circle-div p-3 d-flex flex-row justify-content-center align-items-center">
            <div class="small-circle-div bg-warning">
              <input type="file" class="custom-file-input"/>
            </div>
          </div>
          <h4 v-b-modal.modal-s2-title v-text="pageContent.services.s2.title" class="text-center mt-2"></h4>
          <b-modal hide-footer id="modal-s2-title">
            <b-form-input v-model="pageContent.services.s2.title"></b-form-input>
          </b-modal>
          <p v-b-modal.modal-s2-content v-text="pageContent.services.s2.content">متن لورم اپیزوم متن لورم اپیزوم متن
            لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم
            متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
          <b-modal hide-footer size="lg" id="modal-s2-content">
            <b-form-textarea v-model="pageContent.services.s2.content"></b-form-textarea>
          </b-modal>
        </div>
        <div class="col-3 d-flex flex-column justify-content-center align-items-center mt-2">
          <div class="circle-div p-3 d-flex flex-row justify-content-center align-items-center">
            <div class="small-circle-div bg-warning">
              <input type="file" class="custom-file-input"/>
            </div>
          </div>
          <h4 v-b-modal.modal-s3-title v-text="pageContent.services.s3.title" class="text-center mt-2"></h4>
          <b-modal hide-footer id="modal-s3-title">
            <b-form-input v-model="pageContent.services.s3.title"></b-form-input>
          </b-modal>
          <p v-b-modal.modal-s3-content v-text="pageContent.services.s3.content">متن لورم اپیزوم متن لورم اپیزوم متن
            لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم
            متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
          <b-modal hide-footer size="lg" id="modal-s3-content">
            <b-form-textarea v-model="pageContent.services.s3.content"></b-form-textarea>
          </b-modal>
        </div>
      </div>

      <div class="co-12 d-flex flex-column justify-content-center align-items-center bg-dark p-5">
        <h5 v-b-modal.modal-fr-title v-text="pageContent.formRequest.title" class="m-2 text-white"></h5>
        <b-modal hide-footer id="modal-fr-title">
          <b-form-input v-model="pageContent.formRequest.title"></b-form-input>
        </b-modal>
        <h6 v-b-modal.modal-fr-caption v-text="pageContent.formRequest.caption" class="m-2 text-white"></h6>
        <b-modal hide-footer id="modal-fr-caption">
          <b-form-textarea size="sm" v-model="pageContent.formRequest.caption"></b-form-textarea>
        </b-modal>
        <a v-b-modal.modal-fr-button v-text="pageContent.formRequest.button"
           class="col-4 btn btn-outline-success btn-request m-2"></a>
        <b-modal hide-footer id="modal-fr-button">
          <b-form-input v-model="pageContent.formRequest.button"></b-form-input>
        </b-modal>
      </div>

      <div class="d-flex flex-column">
        <div class="col-12 d-flex flex-row justify-content-between align-items-start p-0 bg-dark">
          <div class="col-5 d-flex flex-row justify-content-start align-items-start p-0">
            <span class="col-2 bg-success spanHeight m-0 p-0"></span>
            <span class="col-5 bg-success spanHeight spanStyle-start"></span>
            <span class="col-5 bg-success spanHalfHeight spanStyle-start"></span>
          </div>
          <div class="col-2 d-flex flex-row justify-content-center align-items-end heading-height">
            <h4 v-b-modal.modal-gy-title v-text="pageContent.gallery.title" class="heading-font-family text-white"></h4>
            <b-modal hide-footer id="modal-gy-title">
              <b-form-input v-model="pageContent.gallery.title"></b-form-input>
            </b-modal>
          </div>
          <div class="col-5 d-flex flex-row-reverse justify-content-start align-items-start p-0">
            <span class="col-2 bg-success spanHeight m-0 p-0"></span>
            <span class="col-5 bg-success spanHeight spanStyle-end"></span>
            <span class="col-5 bg-success spanHalfHeight spanStyle-end"></span>
          </div>
        </div>
        <div class="col-12 d-flex flex-row justify-content-start align-items-center p-0">
          <div class="col-2 d-flex flex-column gallery-column-height p-0">
            <div class="gallery-cell-height">
              <input type="file" class="custom-file-input"/>
            </div>
            <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
              <h5 v-b-modal.modal-gy1-text v-text="pageContent.gallery.box1.text"
                  class="text-center text-white gallery-circle-cell bg-success d-flex flex-row justify-content-center align-items-center m-2"></h5>
              <b-modal hide-footer id="modal-gy1-text">
                <b-form-input v-model="pageContent.gallery.box1.text"></b-form-input>
              </b-modal>
            </div>
          </div>
          <div class="col-2 d-flex flex-column gallery-column-height p-0">
            <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
              <h5 v-b-modal.modal-gy2-text v-text="pageContent.gallery.box2.text"
                  class="text-center text-white gallery-circle-cell bg-dark d-flex flex-row justify-content-center align-items-center m-2"></h5>
              <b-modal hide-footer id="modal-gy2-text">
                <b-form-input v-model="pageContent.gallery.box2.text"></b-form-input>
              </b-modal>
            </div>
            <div class="gallery-cell-height">
              <input type="file" class="custom-file-input"/>
            </div>
          </div>
          <div class="col-2 d-flex flex-column gallery-column-height p-0">
            <div class="gallery-cell-height">
              <input type="file" class="custom-file-input"/>
            </div>
            <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
              <h5 v-b-modal.modal-gy3-text v-text="pageContent.gallery.box3.text"
                  class="text-center text-white gallery-circle-cell bg-dark d-flex flex-row justify-content-center align-items-center m-2"></h5>
              <b-modal hide-footer id="modal-gy3-text">
                <b-form-input v-model="pageContent.gallery.box3.text"></b-form-input>
              </b-modal>
            </div>
          </div>
          <div class="col-2 d-flex flex-column gallery-column-height p-0">
            <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
              <h5 v-b-modal.modal-gy4-text v-text="pageContent.gallery.box4.text"
                  class="text-center text-white gallery-circle-cell bg-success d-flex flex-row justify-content-center align-items-center m-2"></h5>
              <b-modal hide-footer id="modal-gy4-text">
                <b-form-input v-model="pageContent.gallery.box4.text"></b-form-input>
              </b-modal>
            </div>
            <div class="gallery-cell-height">
              <input type="file" class="custom-file-input"/>
            </div>
          </div>
          <div class="col-2 d-flex flex-column gallery-column-height p-0">
            <div class="gallery-cell-height">
              <input type="file" class="custom-file-input"/>
            </div>
            <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
              <h5 v-b-modal.modal-gy5-text v-text="pageContent.gallery.box5.text"
                  class="text-center text-white gallery-circle-cell bg-success d-flex flex-row justify-content-center align-items-center m-2"></h5>
              <b-modal hide-footer id="modal-gy5-text">
                <b-form-input v-model="pageContent.gallery.box5.text"></b-form-input>
              </b-modal>
            </div>
          </div>
          <div class="col-2 d-flex flex-column gallery-column-height p-0">
            <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
              <h5 v-b-modal.modal-gy6-text v-text="pageContent.gallery.box6.text"
                  class="text-center text-white gallery-circle-cell bg-dark d-flex flex-row justify-content-center align-items-center m-2"></h5>
              <b-modal hide-footer id="modal-gy6-text">
                <b-form-input v-model="pageContent.gallery.box6.text"></b-form-input>
              </b-modal>
            </div>
            <div class="gallery-cell-height">
              <input type="file" class="custom-file-input"/>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column p-0">
        <div class="col-12 d-flex flex-row justify-content-between align-items-start p-0 bg-dark">
          <div class="col-5 d-flex flex-row justify-content-start align-items-start p-0">
            <span class="col-2 bg-success spanHeight m-0 p-0"></span>
            <span class="col-5 bg-success spanHeight spanStyle-start"></span>
            <span class="col-5 bg-success spanHalfHeight spanStyle-start"></span>
          </div>
          <div class="col-2 d-flex flex-row justify-content-center align-items-end heading-height">
            <h4 v-b-modal.modal-as-title v-text="pageContent.aboutUs.title" class="heading-font-family text-white">
              درباره ما</h4>
            <b-modal hide-footer id="modal-as-title">
              <b-form-input v-model="pageContent.aboutUs.title"></b-form-input>
            </b-modal>
          </div>
          <div class="col-5 d-flex flex-row-reverse justify-content-start align-items-start p-0">
            <span class="col-2 bg-success spanHeight m-0 p-0"></span>
            <span class="col-5 bg-success spanHeight spanStyle-end"></span>
            <span class="col-5 bg-success spanHalfHeight spanStyle-end"></span>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-center align-items-start aboutUs-section-height">
          <div class="col-6 d-flex flex-column bg-dark justify-content-center align-items-center h-100">
            <p v-b-modal.modal-as-content v-text="pageContent.aboutUs.content" class="text-white text-center"></p>
            <b-modal hide-footer id="modal-as-content">
              <b-form-textarea v-model="pageContent.aboutUs.content"></b-form-textarea>
            </b-modal>
          </div>
          <div class="col-6 p-0 h-100">
            <input type="file" class="custom-file-input"/>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column p-0 overflow-hidden">
        <div class="col-12 d-flex flex-row justify-content-between align-items-start p-0 bg-dark">
          <div class="col-5 d-flex flex-row justify-content-start align-items-start p-0">
            <span class="col-2 bg-success spanHeight m-0 p-0"></span>
            <span class="col-5 bg-success spanHeight spanStyle-start"></span>
            <span class="col-5 bg-success spanHalfHeight spanStyle-start"></span>
          </div>
          <div class="col-2 d-flex flex-row justify-content-center align-items-end heading-height">
            <h4 v-b-modal.modal-cs-title v-text="pageContent.contactUs.title" class="heading-font-family text-white">
              تماس با ما</h4>
            <b-modal hide-footer id="modal-cs-title">
              <b-form-input v-model="pageContent.contactUs.title"></b-form-input>
            </b-modal>
          </div>
          <div class="col-5 d-flex flex-row-reverse justify-content-start align-items-start p-0">
            <span class="col-2 bg-success spanHeight m-0 p-0"></span>
            <span class="col-5 bg-success spanHeight spanStyle-end"></span>
            <span class="col-5 bg-success spanHalfHeight spanStyle-end"></span>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-center align-items-center aboutUs-section-height">
          <div class="col-1 h-100 p-0">
            <div class="h2 col-6 d-flex flex-column bg-success justify-content-end align-items-center h-100">
              <b-icon icon="instagram"></b-icon>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-whatsapp"></i>
            </div>
          </div>
          <div class="col-11">
            <form class="text-right">
              <div class="form-group">
                <label for="name">نام و نام خانوادگی<span class="text-success">*</span></label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="email">ایمیل<span class="text-success">*</span></label>
                <input type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="message">متن پیام<span class="text-success">*</span></label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <input class="btn btn-success" type="submit" value="ارسال پیام">
            </form>
          </div>
        </div>
      </div>

      <b-button align-self="center" variant="outline-success">ذخیره تغییرات</b-button>

    </b-collapse>
  </b-container>

</template>

<script>
  export default {
    name: "home",
    layout: "admin",
    data() {
      return {
        inputMovementText:'روپیلا, روپیلا تجارتی مطمئن, روپیلا همیار شما در تهیل امور واردت',
        movementText: ['روپیلا', 'روپیلا تجارتی مطمئن', 'روپیلا همیار شما در تهیل امور واردت'],
        pageContent: {
          slider: {expert: 'چکیده ای از صفحه'},
          services: {
            title: 'خدمات ما',
            s1: {
              icon: '',
              title: 'مشاوره',
              content: 'متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم'
            },
            s2: {
              icon: '',
              title: 'حمل نقل',
              content: 'متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم'
            },
            s3: {
              icon: '',
              title: 'ترخیص کالا',
              content: 'متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم'
            },
          },
          formRequest: {
            title: 'بخش درخواست کالا',
            caption: 'شما می توانید کالای خود را برای ورود به کشور از ما در خواست کنید',
            button: 'انتقال به فرم ارسال سفارش'
          },
          gallery: {
            title: 'گالری تصاویر ما',
            box1: {image: '', text: 'برنامه ریزی دقیق'},
            box2: {image: '', text: 'مطالعه مفید'},
            box3: {image: '', text: 'مشورت و هماهنگی'},
            box4: {image: '', text: 'پیشروی با امکانات روز'},
            box5: {image: '', text: 'صفا و صمیمیت'},
            box6: {image: '', text: 'هدف های بلند مدت'}
          },
          aboutUs: {
            title: 'درباره ما',
            image: '',
            content: 'متن توضیحاتی کوتاه از درباره مامتن توضیحاتی کوتاه از درباره مامتن توضیحاتی کوتاه از درباره مامتن توضیحاتی کوتاه از درباره ما'
          },
          contactUs: {
            title: 'تماس با ما'
          }
        }
      }
    },
    methods: {
      fillMovementText() {
        this.movementText = this.inputMovementText.split(',')
      }
    },
    computed: {
      mText() {
        return this.movementText.toString()
      }
    },
  }
</script>

<style scoped>

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  .custom-file-input {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .custom-file-input::before {
    content: 'Select some files';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }

  .custom-file-input:hover::before {
    border-color: black;
  }

  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }

</style>

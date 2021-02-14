<template>
  <div class="container-fluid jumbotron-fluid">
    <div id="sliderContainer" class="col-12 p-0">
      <img class="img-fluid slider image-option w-100" src="static/img/slider.jpg" alt="slider">
      <div class="d-flex flex-column justify-content-center w-100 align-items-center">
        <div class="d-flex flex-column justify-content-start">
          <h4 id="myText" class="text-white text-right">{{rem}}</h4>
          <p class="text-white text-right">متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
          <p class="text-white text-right">متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
          <p class="text-white text-right">متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
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
        <h4 class="heading-font-family text-white">خدمات ما</h4>
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
          <div class="small-circle-div bg-warning"></div>
        </div>
        <h4 class="text-center mt-2">مشاوره</h4>
        <p>متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
      </div>
      <div class="col-3 d-flex flex-column justify-content-center align-items-center mt-2">
        <div class="circle-div p-3 d-flex flex-row justify-content-center align-items-center">
          <div class="small-circle-div bg-warning"></div>
        </div>
        <h4 class="text-center mt-2">حمل نقل</h4>
        <p>متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
      </div>
      <div class="col-3 d-flex flex-column justify-content-center align-items-center mt-2">
        <div class="circle-div p-3 d-flex flex-row justify-content-center align-items-center">
          <div class="small-circle-div bg-warning"></div>
        </div>
        <h4 class="text-center mt-2">ترخیص کالا</h4>
        <p>متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم متن لورم اپیزوم</p>
      </div>
    </div>

    <div class="co-12 d-flex flex-column justify-content-center align-items-center bg-dark p-5">
      <h5 class="m-2 text-white">بخش درخواست کالا</h5>
      <h6 class="m-2 text-white">شما می توانید کالای خود را برای ورود به کشور از ما در خواست کنید</h6>
      <nuxt-link to="/formRequest" class="col-4 btn btn-outline-success btn-request m-2">انتقال به فرم ارسال سفارش</nuxt-link>
    </div>

    <div class="d-flex flex-column">
      <div class="col-12 d-flex flex-row justify-content-between align-items-start p-0 bg-dark">
        <div class="col-5 d-flex flex-row justify-content-start align-items-start p-0">
          <span class="col-2 bg-success spanHeight m-0 p-0"></span>
          <span class="col-5 bg-success spanHeight spanStyle-start"></span>
          <span class="col-5 bg-success spanHalfHeight spanStyle-start"></span>
        </div>
        <div class="col-2 d-flex flex-row justify-content-center align-items-end heading-height">
          <h4 class="heading-font-family text-white">گالری تصاویر ما</h4>
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
            <img class="img-fluid img-cover-center h-100" src="static/img/gallery1.jpg" alt="gallery">
          </div>
          <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
            <h5 class="text-center text-white gallery-circle-cell bg-success d-flex flex-row justify-content-center align-items-center m-2">برنامه ریزی دقیق</h5>
          </div>
        </div>
        <div class="col-2 d-flex flex-column gallery-column-height p-0">
          <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
            <h5 class="text-center text-white gallery-circle-cell bg-dark d-flex flex-row justify-content-center align-items-center m-2">مطالعه مفید</h5>
          </div>
          <div class="gallery-cell-height">
            <img class="img-fluid img-cover-center h-100" src="static/img/gallery2.jpg" alt="gallery">
          </div>
        </div>
        <div class="col-2 d-flex flex-column gallery-column-height p-0">
          <div class="gallery-cell-height">
            <img class="img-fluid img-cover-center h-100" src="static/img/gallery3.jpg" alt="gallery">
          </div>
          <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
            <h5 class="text-center text-white gallery-circle-cell bg-dark d-flex flex-row justify-content-center align-items-center m-2">مشورت و هماهنگی</h5>
          </div>
        </div>
        <div class="col-2 d-flex flex-column gallery-column-height p-0">
          <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
            <h5 class="text-center text-white gallery-circle-cell bg-success d-flex flex-row justify-content-center align-items-center m-2">پیشروی با امکانات روز</h5>
          </div>
          <div class="gallery-cell-height">
            <img class="img-fluid img-cover-center h-100" src="static/img/gallery4.jpg" alt="gallery">
          </div>
        </div>
        <div class="col-2 d-flex flex-column gallery-column-height p-0">
          <div class="gallery-cell-height">
            <img class="img-fluid img-cover-center h-100" src="static/img/gallery5.jpg" alt="gallery">
          </div>
          <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
            <h5 class="text-center text-white gallery-circle-cell bg-success d-flex flex-row justify-content-center align-items-center m-2">صفا و صمیمیت</h5>
          </div>
        </div>
        <div class="col-2 d-flex flex-column gallery-column-height p-0">
          <div class="gallery-cell-height d-flex flex-row justify-content-center align-items-center">
            <h5 class="text-center text-white gallery-circle-cell bg-dark d-flex flex-row justify-content-center align-items-center m-2">هدف های بلند مدت</h5>
          </div>
          <div class="gallery-cell-height">
            <img class="img-fluid img-cover-center h-100" src="static/img/gallery6.jpg" alt="gallery">
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
          <h4 class="heading-font-family text-white">درباره ما</h4>
        </div>
        <div class="col-5 d-flex flex-row-reverse justify-content-start align-items-start p-0">
          <span class="col-2 bg-success spanHeight m-0 p-0"></span>
          <span class="col-5 bg-success spanHeight spanStyle-end"></span>
          <span class="col-5 bg-success spanHalfHeight spanStyle-end"></span>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center align-items-start aboutUs-section-height">
        <div class="col-6 d-flex flex-column bg-dark justify-content-center align-items-center h-100">
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
          <p class="text-white">متن لورم اپیزوم اول</p>
        </div>
        <div class="col-6 p-0 h-100">
          <img class="img-cover-center img-fluid h-100" src="static/img/gallery4.jpg" alt="about">
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
          <h4 class="heading-font-family text-white">تماس با ما</h4>
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
            <img class="icon-size" src="static/img/icons/twitter.png" alt="twitter">
            <img class="icon-size" src="static/img/icons/insta.png" alt="insta">
            <img class="icon-size" src="static/img/icons/linkedin.png" alt="linkedin">
            <img class="icon-size" src="static/img/icons/whatsapp.png" alt="whatsapp">
          </div>
        </div>
        <div  class="col-11">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      ac:0,
      txt: ['روپیلا' , 'روپیلا تجارتی مطمٔن' , 'روپیلا همیار شما در تسهیل امور واردات'],
      rem:'',
      i:0,
      idWrite:0,
      idRemove:0
    }
  },
  mounted() {
    this.idWrite = setInterval(this.typeWriter,150)
  },
  methods: {
    typeWriter() {
      if (this.i < this.txt[this.ac].length) {
        //document.getElementById("myText").innerHTML += this.txt[this.ac].charAt(this.i);
        this.rem += this.txt[this.ac].charAt(this.i);
        this.i++;
      } else {
        clearInterval(this.idWrite);
        this.i = this.txt[this.ac].length;
        this.idRemove = setInterval(this.textRemover, 50);
      }
    },
    textRemover(){
      if (this.i > 0) {
        this.rem = this.txt[this.ac].substr(0, this.i);
        this.i--;
        //document.getElementById("myText").innerHTML = this.rem;
      } else {
        clearInterval(this.idRemove);
        this.i = 1;
        this.ac++;
        if (this.ac >= this.txt.length) {
          this.ac = 0;
        }
        this.idWrite = setInterval(this.typeWriter, 150);
      }
    }
  },
}
</script>

<style>
</style>

<template>
  <b-container fluid class="p-0">
<!--    <b-embed-->
<!--      type="iframe"-->
<!--      aspect="21by9"-->
<!--      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"-->
<!--      allowfullscreen></b-embed>-->

    <div id="imgParent">
      <b-img alt="aboutUs" block fluid center src="https://www.arohatours.co.nz/media/1645/banner_queenstown-g.jpg?mode=crop&height=700&width=1920&quality=80"></b-img>
      <div id="darkLayer" class="d-flex flex-row justify-content-center align-items-center">
        <b-row align="center">
          <b-col cols="10" class="text-white">
            <b-form-text text-variant="white" tag="h5" v-text="pageContent.slider.textLine1" ></b-form-text>
          </b-col>
          <b-col v-model="pageContent.slider.textLine2" cols="10" class="text-white">
            <b-form-text text-variant="white" tag="h5" v-text="pageContent.slider.textLine2" ></b-form-text>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-row align-h="center" class="p-3">
      <b-col cols="5">
        <b-form-group class="text-right" label="متن سطر اول روی تصویر">
          <b-form-input v-model="pageContent.slider.textLine1"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="5">
        <b-form-group class="text-right" label="متن سطر دوم روی تصویر">
          <b-form-input v-model="pageContent.slider.textLine2"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <h5 class="text-center">انتخاب تصویر پس زمینه بخش بالایی</h5>
    <b-row class="video-height bg-light w-100">
      <b-col class="choose-video-box d-flex flex-row justify-content-center align-items-center">
        <input type="file">
      </b-col>
    </b-row>

    <hr class="w-75">
    <h5 class="text-center">بیانیه مدیر عامل</h5>
    <b-row class="mt-3">
      <b-col cols="6" class="manager-image-height bg-light p-2">
        <div class="choose-video-box d-flex flex-row justify-content-center align-items-center">
          <i class="fas fa-plus-square" style="font-size: 2rem;"></i>
          <input class="inputUpload" type="file" id="inputUpload2" name="inputUpload">
        </div>
      </b-col>
      <b-col cols="6" class="p-2 m-0 overflow-hidden">
        <b-form-textarea rows="20" placeholder="متن بیانیه"></b-form-textarea>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
    export default {
        name: "aboutus",
        layout:"admin",
      data() {
        return {
          pageContent: {
            slider:{image:'',textLine1:'متن سطر اول',textLine2:'متن سطر دوم'}
          }
        }
      },
    }
</script>

<style scoped>

  #imgParent{
    position: relative;
  }
  #darkLayer{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
  }

</style>

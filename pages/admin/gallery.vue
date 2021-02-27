<template>
  <b-container fluid v-if="!loading">
    <b-row class="mt-2">
      <b-col cols="10" class="p-0">
        <b-row align="center" class="d-flex justify-content-center m-0 p-0">
          <b-col v-for="(image , index) in imageItems" cols="2" :key="index" class="gallery-box-item bg-light p-1">
            <b-img-lazy v-bind="bImageProp" :src="image.image" alt="Gallery Image"></b-img-lazy>
          </b-col>
          <b-col cols="2" class="gallery-box-item bg-light m-1 p-5" style="font-size: 2rem;">
            <i class="fas fa-plus-square"></i>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2">
        <b-row align-h="center" class="p-3 max-height">
          <b-col cols="12" class="text-center m-1 p-2 border border-success d-flex flex-row justify-content-center align-items-center"><i class="fas fa-plus-square"></i></b-col>
          <b-col v-for="(category,index) in categoryItems" :key="index" cols="12" :class="`text-center m-1 p-2 border border-2 ${(index === 0)?'bg-success text-white':''} border-success border border-primary`">
            {{category.name}}
          </b-col>
        </b-row>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import {galleryImages} from "../../graphql/galleryImages";
  import {galleryCategories} from "../../graphql/galleryCategories";

  export default {
    name: "gallery",
    layout: "admin",
    data() {
      return {
        galleryData: {
          page: 1,
          limit: 30
        },
        imageItems: [],
        categoryItems: [],
        loading: true,
        bImageProp: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400
        }
      }
    },
    mounted() {
      this.galleryImages()
      this.galleryCategories()
    },
    methods: {
      async galleryImages() {
        let images = await this.$apollo.query({
          query: galleryImages,
          variables: {
            page: this.galleryData.page,
            limit: this.galleryData.limit
          }
        })
        this.imageItems = images.data.galleryImages.images
        this.loading = false
      },
      async galleryCategories(){
        let categories = await this.$apollo.query({
          query: galleryCategories,
          variables: {
            page: this.galleryData.page,
            limit: this.galleryData.limit
          }
        })
        this.categoryItems = categories.data.galleryCategories.galleryCategories
      }
    },
  }
</script>

<style scoped>
.max-height{
  max-height: 600px;
  overflow: auto;
}
</style>

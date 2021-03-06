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
        <b-pagination align="center" v-model="galleryData.page" :total-rows="galleryData.total"
                      :per-page="galleryData.limit"></b-pagination>
      </b-col>
      <b-col cols="2">
        <b-row align-h="center" class="p-3 max-height">
          <b-col cols="12" class="text-center m-1 p-2 border border-success d-flex flex-row justify-content-center align-items-center"><i class="fas fa-plus-square"></i></b-col>
          <b-col cols="12" class="text-center m-1 p-2 border bg-success rounded text-white border-success">همه</b-col>
          <b-col v-for="(category,index) in categoryItems" :key="index" @click="galleryImageByCategoryId(category.id)" cols="12" class="text-center m-1 p-2">
            <b-button block variant="bg-light" class="border border-success'">{{category.name}}</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import {galleryImages} from "../../graphql/galleryImages";
  import {galleryCategories} from "../../graphql/galleryCategories";
  import {galleryImageByCategoryId} from "../../graphql/galleryImageByCategoryId";

  export default {
    middleware:['adminOrSuperAdmin'],
    name: "gallery",
    layout: "admin",
    data() {
      return {
        galleryData: {
          page: 1,
          pages:1,
          total:1,
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
        this.galleryData = images.data.galleryImages.paginate
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
      },
      async galleryImageByCategoryId(category_id){
        this.$nuxt.$loading.start()
        let images = await this.$apollo.query({
          query:galleryImageByCategoryId,
          variables:{
            category_id,
            page:this.galleryData.page,
            limit:this.galleryData.limit
          }
        })
        this.imageItems = images.data.galleryImageByCategoryId.images
        this.galleryData = images.data.galleryImageByCategoryId.paginate
        this.$nuxt.$loading.finish()
      }
    },
    computed: {
      page() {
        return this.galleryData.page;
      }
    },
    watch: {
      page(newValue, oldValue) {
        this.galleryImages()
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

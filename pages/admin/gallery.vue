<template>
  <b-container fluid v-if="!loading">
    <b-row class="mt-2">
      <b-col cols="10" class="p-0">
        <b-row align="center" class="d-flex justify-content-center m-0 p-0">
          <b-col v-for="(image , index) in imageItems" cols="2" :key="index"
                 class="gallery-box-item bg-light p-1 fadeIn-animation">
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
          <b-col cols="12"
                 class="text-center m-1 p-2 border border-success d-flex flex-row justify-content-center align-items-center">
            <i class="fas fa-plus-square"></i></b-col>
          <b-col cols="12" class="text-center m-1 p-2">
            <b-button @click="galleryImages" block variant="bg-success"
                      :class="(selectedCategoryId === 'all')?'text-center m-1 p-2  rounded btn btn-success':'border border-success'">
              همه
            </b-button>
          </b-col>
          <b-col v-for="(category,index) in categoryItems" :key="index" @click="galleryImageByCategoryId(category.id)"
                 cols="12" class="text-center m-1 p-2">
            <b-button block variant="bg-light"
                      :class="`border border-success ${(category.id === selectedCategoryId)?'text-center m-1 p-2  rounded btn btn-success':''}`">
              {{category.name}}
            </b-button>
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
    middleware: ['adminOrSuperAdmin'],
    name: "gallery",
    layout: "admin",
    data() {
      return {
        selectedCategoryId: null,
        galleryData: {
          page: 1,
          pages: 1,
          total: 1,
          limit: 18
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
      this.galleryImages(true)
      this.galleryCategories()
    },
    methods: {
      galleryImages(isMounted = false) {
        //this if for nextTick function
        if (!isMounted) this.startLoading()
        this.selectedCategoryId = 'all'
        this.$apollo.query({
          query: galleryImages,
          variables: {
            page: this.galleryData.page,
            limit: this.galleryData.limit
          }
        })
          .then(({data}) => {
            this.imageItems = data.galleryImages.images
            this.galleryData.page = data.galleryImages.paginate.page
            this.galleryData.limit = data.galleryImages.paginate.limit
            this.galleryData.total = data.galleryImages.paginate.total
            this.loading = false
          }).finally(() => {
          this.finishLoading()
        })
      },
      galleryCategories() {
        this.$apollo.query({
          query: galleryCategories,
          variables: {
            page: 1,
            limit: 10
          }
        })
          .then(({data}) => {
            this.categoryItems = data.galleryCategories.galleryCategories
          })
      },
      galleryImageByCategoryId(category_id) {
        this.selectedCategoryId = category_id
        this.startLoading()
        this.$apollo.query({
          query: galleryImageByCategoryId,
          variables: {
            category_id,
            page: 1,
            limit: 10
          }
        })
          .then(({data}) => {
            this.imageItems = data.galleryImageByCategoryId.images
            this.galleryData.page = data.galleryImageByCategoryId.paginate.page
            this.galleryData.limit = data.galleryImageByCategoryId.paginate.limit
            this.galleryData.total = data.galleryImageByCategoryId.paginate.total
          }).finally(() => {
          this.finishLoading()
        })
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
  .max-height {
    max-height: 600px;
    overflow: auto;
  }
</style>

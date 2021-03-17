<template>
  <b-container fluid class="p-0">
    <b-row align="center" class="d-flex justify-content-center m-0 p-0">
      <b-col v-for="(image , index) in imageItems" cols="2" :key="index"
             class="gallery-box-item bg-light p-1 fadeIn-animation">
        <b-img-lazy v-bind="bImageProp" :src="image.image" alt="Gallery Image"></b-img-lazy>
      </b-col>
      <b-col cols="2" class="gallery-box-item bg-light m-1 p-5" style="font-size: 2rem;">
        <i class="fas fa-plus-square"></i>
      </b-col>
    </b-row>
    <b-pagination  align="center" v-model="paginate.page" :total-rows="paginate.total"
                  :per-page="paginate.limit"></b-pagination>
  </b-container>
</template>

<script>
  import {galleryImages} from "../../../graphql/galleryImages";
  import {galleryImageByCategoryId} from "../../../graphql/galleryImageByCategoryId";

  export default {
    name: "imagesChild",
    data() {
      return {
        paginate: {
          page: 1,
          pages: 1,
          total: 1,
          limit: 18
        },
        imageItems: [],
        bImageProp: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400
        },
        imageParams: this.$route.params
      }
    },
    mounted() {
      console.log('Mounted Called')
      this.paginate.page = this.$store.state.pagination.adminGalleryPaginate.page
      this.loadImages(this.imageParams.imagesChild, true)
    },
    methods: {
      galleryImages(isMounted = false) {
        //this if for nextTick function
        if (!isMounted) this.startLoading()
        this.$apollo.query({
          query: galleryImages,
          variables: {
            page: this.paginate.page,
            limit: this.paginate.limit
          }
        })
          .then(({data}) => {
            this.imageItems = data.galleryImages.images
            this.paginate.page = data.galleryImages.paginate.page
            this.paginate.limit = data.galleryImages.paginate.limit
            this.paginate.total = data.galleryImages.paginate.total
          }).finally(() => {
          this.finishLoading()
        })
      },
      galleryImageByCategoryId(category_id, isMounted = false) {
        if (!isMounted) this.startLoading()
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
            this.paginate.page = data.galleryImageByCategoryId.paginate.page
            this.paginate.limit = data.galleryImageByCategoryId.paginate.limit
            this.paginate.total = data.galleryImageByCategoryId.paginate.total
          }).finally(() => {
          this.finishLoading()
        })
      },
      loadImages(category_id, isMounted) {
        if (category_id === 'all' || category_id === undefined) {
          this.galleryImages(isMounted)
        } else {
          this.galleryImageByCategoryId(category_id, isMounted)
        }
      }
    },
    computed: {
      page() {
        return this.paginate.page;
      }
    },
    watch: {
      page(newValue, oldValue) {
        this.$store.dispatch('pagination/setAdminGalleryPaginateData', {page: this.paginate.page})
        this.galleryImages()
      },
      imageParams(newValue, oldValue) {
        this.loadImages(this.imageParams.imagesChild, false)
      }
    },
  }
</script>

<style scoped>

</style>

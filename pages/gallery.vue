<template>
  <!-- Work Start -->
  <section class="section min-height-768" v-if="!loading">
    <div class="container">
      <div class="row" >
        <ul class="col container-filter list-unstyled categories-filter text-center" id="filter">
          <li v-for="(category,index) in categoryItems" :key="index" @click="setCategoryIndex(index)" class="list-inline-item"><a
            :class="`categories border d-block text-dark rounded ${(index === categoryIndex)? 'active':''}`">{{category.name}}</a>
          </li>
        </ul>
      </div><!--end row-->
    </div><!--end container-->

    <div class="container-fluid">
      <div class="row container-grid projects-wrapper">

        <div v-for="(image,index) in categoryItems[categoryIndex].images" class="col-lg-3 col-md-6 spacing designing fadeIn-animation">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" title="">
              <b-img-lazy :src="image.image" class="img-fluid rounded" alt="work-image"></b-img-lazy>
              <div class="overlay-work"></div>
            </a>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Work End -->
</template>

<script>
  import {galleryCategories} from "../graphql/front/galleryCategories";

  export default {
    auth: false,
    name: "gallery",
    data() {
      return {
        paginate: {
          page: 1,
          limit: 10
        },
        loading: true,
        categoryItems: [],
        categoryIndex:0
      }
    },
    mounted() {
      this.galleryCategories(true)
    },
    methods: {
      async galleryCategories(isMounted = false) {
        if(!isMounted) this.startLoading()
        let categories = await this.$apollo.query({
          query: galleryCategories,
          variables: {limit: 8}
        })
        this.categoryItems = categories.data.galleryCategories.galleryCategories
        this.loading = false
        this.finishLoading()
      },
      setCategoryIndex(index){
        this.categoryIndex = index
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <!-- Work Start -->
  <section class="section" v-if="!loading">
    <div class="container">
      <div class="row" >
        <ul class="col container-filter list-unstyled categories-filter text-center" id="filter">
          <li v-for="(category,index) in categoryItems" :key="index" @click="setCategoryIndex(index)" class="list-inline-item"><a
            :class="`categories border d-block text-dark rounded ${(index === 0)? 'active':''}`">{{category.name}}</a>
          </li>
        </ul>
      </div><!--end row-->
    </div><!--end container-->

    <div class="container-fluid">
      <div class="row container-grid projects-wrapper">

        <div v-for="(image,index) in categoryItems[categoryIndex].images" class="col-lg-3 col-md-6 spacing designing">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" title="">
              <img :src="image.image" class="img-fluid rounded" alt="work-image">
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
        galleryData: {
          page: 1,
          limit: 10
        },
        loading: true,
        categoryItems: [],
        categoryIndex:0
      }
    },
    mounted() {
      this.galleryCategories()
    },
    methods: {
      async galleryCategories() {
        let categories = await this.$apollo.query({
          query: galleryCategories,
          variables: {limit: 8}
        })
        this.categoryItems = categories.data.galleryCategories.galleryCategories
        this.loading = false
      },
      setCategoryIndex(index){
        this.categoryIndex = index
      }
    },
  }
</script>

<style scoped>

</style>

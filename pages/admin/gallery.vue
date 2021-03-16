<template>
  <b-container fluid v-if="!loading">
    <b-row class="mt-2">
      <b-col cols="10">
        <nuxt-child />
      </b-col>
      <b-col cols="2">
        <b-row align-h="center" class="p-3 max-height">
          <b-col cols="12"
                 class="text-center m-1 p-2 border border-success d-flex flex-row justify-content-center align-items-center">
            <i class="fas fa-plus-square"></i></b-col>
          <b-col cols="12" class="text-center m-1 p-2">
            <nuxt-link  to="/admin/gallery/all"
                       :class="`w-100 ${($route.params.imagesChild === 'all')?'text-center m-1 p-2 rounded btn btn-success':'btn border border-success'}`">
              همه
            </nuxt-link>
          </b-col>
          <b-col v-for="(category,index) in categoryItems" :key="index"
                 cols="12" class="text-center m-1 p-2">
            <nuxt-link :to="`/admin/gallery/${category.id}`"
                       :class="`w-100 ${(category.id === $route.params.imagesChild)?'text-center m-1 p-2  rounded btn btn-success':'btn border border-success'}`">
              {{category.name}}
            </nuxt-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {galleryCategories} from "../../graphql/galleryCategories";

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "gallery",
    layout: "admin",
    data() {
      return {
        categoryItems: [],
        loading: true,
      }
    },
    mounted() {
      this.galleryCategories()
    },
    methods: {
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
            this.loading = false
          })
      }
    }
  }
</script>

<style scoped>
  .max-height {
    max-height: 600px;
    overflow: auto;
  }
</style>

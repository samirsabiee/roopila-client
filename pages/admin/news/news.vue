<template>
  <b-container fluid class="m-2 p-0"
               v-if="!this.$apollo.queries.news.loading && !this.$apollo.queries.newsCategories.loading">
    <b-row align-h="center">
      <b-col cols="9" class="bg-light p-2">
        <b-row align="center" align-h="center">
          <b-col cols="5" class="mt-4 fadeIn-animation" v-for="(news,index) in newsItems" :key="index">
            <b-card no-body class="overflow-hidden" style="max-width: 540px; height: 250px">
              <b-row no-gutters class="h-100">
                <b-col md="6">
                  <b-card-img :src="news.image" height="100%" alt="Image"
                              class="rounded-0 img-full fadeIn-animation"></b-card-img>
                </b-col>
                <b-col md="6" class="relative-position">
                  <b-card-body :title="news.title">

                  </b-card-body>
                  <b-card-footer class="absolute-position w-100">
                    <b-card-text>{{jalali(news.createdAt)}}</b-card-text>
                  </b-card-footer>
                </b-col>
              </b-row>
            </b-card>
          </b-col>

        </b-row>
        <b-pagination class="mt-3" align="center" v-model="paginate.page" :total-rows="paginate.total"
                      :per-page="paginate.limit"></b-pagination>
      </b-col>
      <b-col cols="3" class="bg-light p-3">
        <h4 class="text-center">دسته بندی ها</h4>
        <hr class="mb-3">
        <div class="max-height">
          <b-col cols="11" class="text-center m-1 p-2">
            <b-button block @click="news" variant="bg-light"
                      :class="(selectedCategoryId === 'all')?'text-center m-1 p-2  rounded btn btn-success':'border border-success'">
              همه
            </b-button>
          </b-col>
          <b-col v-for="(category , index) in newsCategories.categories" :key="index"
                 cols="11" class="text-center m-1 p-2">
            <b-button @click="newsByCategoryId(category.id)" block variant="bg-light"
                      :class="`border border-success ${(category.id === selectedCategoryId)?'text-center m-1 p-2  rounded btn btn-success':''}`">
              {{category.name}}
            </b-button>
          </b-col>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {news} from '../../../graphql/news'
  import {newsCategories} from "../../../graphql/newsCategories";
  import moment from 'jalali-moment'
  import {newsByCategoryId} from "../../../graphql/newsByCategoryId";

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "news",
    layout: "admin",
    data() {
      return {
        selectedCategoryId: null,
        newsCategoriesArgs: {
          page: 1,
          limit: 50
        },
        newsItems: [],
        paginate: {
          page: 1,
          limit: 10
        }
      }
    },
    mounted() {
      this.paginate.page = this.$store.state.pagination.adminNewsPaginate.page
    },
    apollo: {
      news: {
        query: news,
        variables() {
          return {
            page: this.paginate.page,
            limit: this.paginate.limit
          }
        },
        result({data}) {
          this.newsItems = data.news.news
          this.paginate.page = data.news.paginate.page
          this.paginate.limit = data.news.paginate.limit
          this.paginate.total = data.news.paginate.total
          this.selectedCategoryId = 'all'
        }
      },
      newsCategories: {
        query: newsCategories,
        variables() {
          return {
            page: this.newsCategoriesArgs.page,
            limit: this.newsCategoriesArgs.limit
          }
        }
      }
    },
    methods: {
      news() {
        this.selectedCategoryId = 'all'
        this.startLoading()
        this.$apollo.query({
          query: news,
          variables: {
            page: this.paginate.page,
            limit: this.paginate.limit
          },
        })
          .then(({data}) => {
            this.newsItems = data.news.news
            this.paginate.page = data.news.paginate.page
            this.paginate.limit = data.news.paginate.limit
            this.paginate.total = data.news.paginate.total
          }).finally(() => {
          this.finishLoading()
        })
      },
      newsByCategoryId(id) {
        this.selectedCategoryId = id
        this.startLoading()
        this.$apollo.query({
          query: newsByCategoryId,
          variables: {
            category_id: id
          }
        })
          .then(({data}) => {
            this.newsItems = data.newsByCategoryId.news
            this.paginate.page = data.newsByCategoryId.paginate.page
            this.paginate.limit = data.newsByCategoryId.paginate.limit
            this.paginate.total = data.newsByCategoryId.paginate.total
          }).finally(() => {
          this.finishLoading()
        })
      },
      jalali(date) {
        return moment(parseInt(date)).locale('fa').format('dddd، YYYY/MM/DD')
      }
    },
    computed: {
      page() {
        return this.paginate.page;
      }
    },
    watch: {
      page(newValue, oldValue) {
        this.$store.dispatch('pagination/setAdminNewsPaginateData', {page: this.paginate.page})
      }
    },
  }
</script>

<style scoped>
  @font-face {
    font-family: IRANSans;
    src: url("~static/fonts/IRANSans/IRANSans.ttf");
  }

  body {
    font-family: IRANSans, serif;
  }

  .img-full {
    object-fit: cover;
    object-position: center;
  }

  .relative-position {
    position: relative;
  }

  .absolute-position {
    position: absolute;
    bottom: 0;
  }

  .max-height {
    max-height: 600px;
    overflow: auto;
  }
</style>

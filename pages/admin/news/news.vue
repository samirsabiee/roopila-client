<template>
  <b-container fluid class="m-2 p-0"
               v-if="!this.$apollo.queries.news.loading && !this.$apollo.queries.newsCategories.loading">
    <b-row align-h="center">
      <b-col cols="9" class="bg-light p-2">
        <b-row align="center" align-h="center">
          <b-col cols="5" class="mt-4" v-for="(news,index) in newsItems" :key="index">
            <b-card no-body class="overflow-hidden" style="max-width: 540px; height: 250px">
              <b-row no-gutters class="h-100">
                <b-col md="6">
                  <b-card-img :src="news.image" height="100%" alt="Image"
                              class="rounded-0 img-full"></b-card-img>
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
          <b-col cols="11" class="text-center m-1 p-2 border bg-success rounded text-white border-success">همه</b-col>
          <b-col v-for="(category , index) in newsCategories.categories" :key="index" @click="logClick(category.id)"
                 cols="11" class="text-center m-1 p-2">
            <b-button @click="logClick(category.id)" block variant="bg-light" class="border border-success">{{category.name}}</b-button>
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

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "news",
    layout: "admin",
    data() {
      return {
        newsCategoriesArgs: {
          page: 1,
          limit: 50
        },
        newsItems: [],
        paginate:{
          page: 1,
          limit: 100
        }
      }
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
          this.paginate = data.news.paginate
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
      logClick(id) {
        console.log('hello')
      },
      jalali(date) {
        return moment(parseInt(date)).locale('fa').format('dddd، YYYY/MM/DD')
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: IRANSans;
    src: url("~static/fonts/IRANSans/IRANSans.ttf");
  }

  @font-face {
    font-family: BMajidSh;
    src: url("~static/fonts/BMajidSh/BMajidSh.ttf");
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

<template>
  <b-container fluid class="m-2 p-0" v-if="!this.$apollo.queries.news.loading && !this.$apollo.queries.newsCategories.loading">
    <b-row align-h="center">
      <b-col cols="9" class="bg-light p-2">
        <b-row align="center" align-h="center">
          <b-col cols="5" class="mt-4"  v-for="(news,index) in news.news" :key="index">
            <b-card no-body class="overflow-hidden" style="max-width: 540px; height: 250px">
              <b-row no-gutters class="h-100">
                <b-col md="6">
                  <b-card-img  :src="`https://picsum.photos/266/200?random=${index+1}`" height="100%"  alt="Image" class="rounded-0 img-full"></b-card-img>
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
      </b-col>
      <b-col cols="3" class="bg-light p-3">
        <h4 class="text-center">دسته بندی ها</h4>
        <hr class="mb-3">
        <h5 v-for="(category , index) in newsCategories.categories" :key="index" @click="logClick(category.id)" class="btn btn-outline-success btn-block">{{category.name}}</h5>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {news} from '../../../graphql/news'
  import {newsCategories} from "../../../graphql/newsCategories";
  import moment from 'jalali-moment'

  export default {
    name: "news",
    layout: "admin",
    data() {
      return {
        newsArgs: {
          page: 1,
          limit: 10
        },
        newsCategoriesArgs:{
          page:1,
          limit:50
        },
        newsItems:[]
      }
    },
    apollo: {
      news: {
        query: news,
        variables() {
          return {
            page: this.newsArgs.page,
            limit: this.newsArgs.limit
          }
        }
      },
      newsCategories:{
        query:newsCategories,
        variables(){
          return{
            page:this.newsCategoriesArgs.page,
            limit:this.newsCategoriesArgs.limit
          }
        }
      }
    },
    methods: {
      logClick(id){
        console.log(id)
      },
      getNewsItems(){
        let newsItem = [];
        this.news.news.filter(news => {
          newsItem.push(
            {
              title:news.title,
              content:news.content,
              image:`http:localhost:3001${news.image}`,
              category:news.category,
              views:news.views
            }
          )
        })
        console.log(newsItem)
      },
      jalali(date){
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

  .news-box {
    position: relative;
    width: 18rem;
    height: 12rem;
    margin: 4px;
  }

  .darkLayer {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .category-font-size {
    font-size: 14px;
  }

  .date-font-size {
    font-size: 12px;
  }
  .img-full{
    object-fit: cover;
    object-position: center;
  }

  .relative-position{
    position: relative;
  }
  .absolute-position{
    position: absolute;
    bottom: 0;
  }
</style>

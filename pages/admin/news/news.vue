<template>
  <b-container fluid class="m-2 p-0" v-if="!this.$apollo.queries.news.loading && !this.$apollo.queries.newsCategories.loading">
    <b-row align-h="center">
      <b-col cols="9" class="bg-light p-2">
        <b-row>
          <b-col cols="3" v-for="(news,index) in news.news" :key="index">
            <div class="news-box overflow-hidden rounded border border-success">
              <img class="img-cover-center img-fluid h-100" :src="imageUrl(index)" alt="news">
              <div class="darkLayer d-flex flex-column justify-content-end align-items-start w-100 p-2">
                <div class="d-flex flex-row justify-content-between align-items-center w-100">
                  <h6 class="text-white border border-success p-1 category-font-size">{{news.category.name}}</h6>
                  <i class="far fa-eye" style="font-size: 1.5rem; color: greenyellow;"> {{news.views}}</i>
                </div>
                <h5 class="text-white">{{news.title}}</h5>
                <h6 class="date-font-size text-white">تاریخ 99/11/02</h6>
              </div>
            </div>
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
      imageUrl(index) {
        return `http://localhost:3001${this.news.news[index].image}`;
      },
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
      }
    },
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

</style>

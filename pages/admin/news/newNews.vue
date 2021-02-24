<template>
  <b-container fluid class="m-2">
    <b-row class="bg-light p-3">
      <b-col cols="9">
        <div class="form-group col">
          <input class="form-control" type="text" v-model="newNewsData.title" placeholder="عنوان خبر">
        </div>
        <div class="form-group col">
          <textarea class="form-control" v-model="newNewsData.content" placeholder="متن خبر"></textarea>
        </div>
        <div class="form-group col">
          <b-form-select v-model="newNewsData.optionSelected" :options="options"></b-form-select>
        </div>
        <div class="form-group col">
          <b-form-tags
            input-id="tags-separators"
            v-model="newNewsData.tags"
            separator=" "
            placeholder="برچسب ها را با فاصله (اسپیس) از هم جدا کنید"
            no-add-on-enter
          ></b-form-tags>
        </div>
        <div class="form-group col">
          <b-form-file v-model="newNewsData.image" :state="Boolean(newNewsData.image)" placeholder="تصویر خبر را انتخاب کنید" drop-placeholder="فایل را روی این باکس بکشید"></b-form-file>
        </div>
        <div class="form-group">
          <b-button  class="btn btn-success" @click="addNews">ذخیره سازی</b-button>
        </div>
      </b-col>
      <b-col cols="3">
        <div class="p-3">
          <h4 class="text-center">افزودن دسته بندی</h4>
          <hr class="m-2">
          <div class="form-group col p-0">
            <input class="form-control" type="text" v-model="newCategoryName" placeholder="عنوان دسته">
          </div>
          <button @click="addCategory(newCategoryName)" class="btn btn-success btn-block">افزودن</button>

        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {newNewsCategory} from "../../../graphql/mutation/newNewsCategory";
  import {newsCategories} from "../../../graphql/newsCategories";
  import {newNews} from "../../../graphql/mutation/newNews";

  export default {
    name: "newNews",
    layout: "admin",
    data() {
      return {
        newCategoryName: '',
        options: [],
        newsCategoriesData: {
          page: 1,
          limit: 30
        },
        newNewsData:{
          title:'',
          content:'',
          optionSelected: null,
          tags:[],
          image:null
        }
      }
    },
    mounted() {
      this.getAllNewsCategories();
    },
    methods: {
      async addCategory(name) {
        let result = await this.$apollo.mutate({
          mutation: newNewsCategory,
          variables: {name}
        })
        this.options.push({value: result.data.newNewsCategory.id, text: result.data.newNewsCategory.name})
      },
      async getAllNewsCategories() {
        let categories = await this.$apollo.query({
          query: newsCategories,
          variables() {
            return {
              page: this.newsCategoriesData.page,
              limit: this.newsCategoriesData.limit
            }
          }
        })
        categories.data.newsCategories.categories.filter(obj => {
          this.options.push({
            value:obj.id,
            text:obj.name
          })
        })
      },
      async addNews(){
        let news = await this.$apollo.mutate({
          mutation:newNews,
          variables:{
            title:this.newNewsData.title,
            content:this.newNewsData.content,
            category_id:this.newNewsData.optionSelected,
            tags:this.newNewsData.tags,
            image:this.newNewsData.image
          }
        })
        console.log(news.data.newNews.id)
      }
    }
  }
</script>

<style scoped>

</style>

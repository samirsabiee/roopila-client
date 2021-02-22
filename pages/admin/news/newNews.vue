<template>
  <b-container fluid class="m-2">
    <b-row class="bg-light p-3">
      <b-col cols="9">
        <div class="form-group col">
          <input class="form-control" type="text" placeholder="عنوان خبر">
        </div>
        <div class="form-group col">
          <textarea class="form-control" placeholder="متن خبر"></textarea>
        </div>
        <div class="form-group col">
          <b-form-select v-model="optionSelected" :options="options"></b-form-select>
        </div>
        <div class="form-group col">
          <label for="choosePic">انتخاب تصویر</label>
          <input class="form-control" type="file" id="choosePic" />
        </div>
        <div class="form-group col-2">
          <input class="form-control" type="submit" value="ذخیره سازی">
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

  export default {
    name: "newNews",
    layout: "admin",
    data() {
      return {
        newCategoryName: '',
        optionSelected:null,
        options:[
          {value:"1",text:"اقتصادی"},
          {value:"2",text:"واردات"},
          {value:"3",text:"صادرات"},
        ]
      }
    },
    methods: {
      async addCategory(name) {
        let result = await this.$apollo.mutate({
          mutation:newNewsCategory,
          variables:{name}
        })
        this.options.push({value: result.data.newNewsCategory.id , text:result.data.newNewsCategory.name})
      }
    },
  }
</script>

<style scoped>

</style>

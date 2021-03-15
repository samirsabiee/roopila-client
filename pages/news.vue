<template>
  <div class="min-height-768">
    <!-- Hero Start -->
    <section class="bg-half bg-light">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title"> آخرین اخبار به روایت از روپیلا </h4>
                  <ul class="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                    <li>
                      <nuxt-link to="/" class="text-uppercase font-weight-bold text-dark">خانه</nuxt-link>
                    </li>
                    <li>
                      <span class="text-uppercase text-primary font-weight-bold">آخرین اخبار</span>
                    </li>
                  </ul>
                </div>
              </div>  <!--end col-->
            </div><!--end row-->
          </div> <!--end container-->
        </div>
      </div>
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Start Works -->
    <section class="section">
      <div class="container" v-if="!$apollo.queries.news.loading">
        <div class="row">

          <div v-for="(n,i) in news.news" :key="i" class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
            <nuxt-link :to="{name:'newsDetail',query:{id:n.id}}">
              <div class="work-container position-relative rounded">
                <div class="position-relative overflow-hidden">
                  <img :src="n.image" class="img-fluid rounded" alt="work-image">
                  <div class="overlay-work"></div>
                  <div class="content">
                    <span class="title text-white d-block font-weight-bold">{{n.title}}</span>
                    <small class="text-light">{{n.category.name}}</small>
                  </div>
                  <div class="client">
                    <small class="text-light user d-block"><i class="mdi mdi-account"></i>سمیر سبیعی</small>
                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i>{{jalali(n.createdAt)}}</small>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div><!--end col-->

        </div><!--end row-->
        <b-pagination align="center" pills v-model="paginate.page" :total-rows="news.paginate.total"
                      :per-page="paginate.limit"></b-pagination>
      </div><!--end container-->
    </section><!--end section-->
    <!-- End Works -->
  </div>
</template>

<script>
  import {news} from '../graphql/front/news'
  import moment from "jalali-moment";

  export default {
    auth: false,
    name: "news",
    data() {
      return {
        paginate: {
          page: 1,
          limit: 20
        },
      }
    },
    mounted() {
      this.paginate.page = this.$store.state.pagination.newsPaginate.page
    },
    apollo: {
      news: {
        query: news,
        variables() {
          return {
            page: this.paginate.page,
            limit: this.paginate.limit
          }
        }
      }
    },
    methods: {
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
        this.$store.dispatch('pagination/setNewsPaginateData', {page: this.paginate.page})
      }
    },
  }
</script>

<style scoped>
  @import "assets/css/owl.carousel.min.css";
  @import "assets/css/owl.theme.default.min.css";
</style>

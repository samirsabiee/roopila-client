<template>
  <div v-if="!loading" class="min-height-768">
    <!-- Hero Start -->
    <section class="bg-half bg-light">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title"> {{news.title}} </h4>
                  <ul class="list-unstyled mt-4">
                    <li class="list-inline-item h6 date text-muted"><span class="text-dark">تاریخ :</span>{{jalali(news.createdAt)}}
                    </li>
                  </ul>
                  <ul class="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                    <li>
                      <nuxt-link to="/" class="text-uppercase font-weight-bold text-dark">خانه</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/news" class="text-uppercase font-weight-bold text-dark">اخبار</nuxt-link>
                    </li>
                    <li>
                      <span class="text-uppercase text-primary font-weight-bold">{{news.title}}</span>
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

    <!-- Start Work Detail -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <img :src="news.image" class="img-fluid rounded img-option" alt="">
          </div>

          <div class="col-md-10 mt-4 pt-2">
            <div class="bg-light rounded p-4">
              <p class="text-muted font-italic mb-0">{{news.content}}</p>
            </div>

            <div class="row bg-light rounded p-4 mt-4 pt-2">
              <ul class="list-unstyled feature-list text-muted col-md-6 mt-4 pt-2 d-flex flex-column justify-content-center">
                <li v-for="(tag,index) in news.tags"
                    :key="index" ><i class="mdi mdi-music-accidental-sharp text-success h4 mr-2"></i>
                  {{tag}}
                </li>
              </ul>
              <div class="col-md-6 mt-4 pt-2">
                <div class="work-details rounded bg-light p-4">
                  <h5 class="title border-bottom pb-3 mb-3">جزئیات خبر :</h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mt-3">
                      <b>نویسنده :</b>
                      <span>روپیلا</span>
                    </li>
                    <li class="mt-3">
                      <b>دسته :</b>
                      <span>{{news.category.name}}</span>
                    </li>
                    <li class="mt-3">
                      <b>تاریخ :</b>
                      <span>{{jalali(news.createdAt)}}</span>
                    </li>
                    <li class="mt-3">
                      <b>وب سایت :</b>
                      <span>www.roopila.com</span>
                    </li>
                    <li class="mt-3">
                      <b>بازدید خبر :</b>
                      <span>{{news.views}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Work Detail -->
  </div>
</template>

<script>
  import {newsById} from "../graphql/front/newsById";
  import moment from "jalali-moment";

  export default {
    auth: false,
    name: "newsDetail",
    data() {
      return {
        loading: true,
        news: {}
      }
    },
    mounted() {
      if (this.$route.query.id !== undefined) {
        this.getNewsById(this.$route.query.id)
      }else{
        this.$router.push('/news')
      }
    },
    methods: {
      getNewsById(id) {
        this.$apollo.query({
          query: newsById,
          variables: {id}
        }).then(({data}) => {
          this.news = data.newsById
          this.loading = false
        }).catch(e => {
          this.$router.push('/news')
        })
      },
      jalali(date) {
        return moment(parseInt(date)).locale('fa').format('dddd، YYYY/MM/DD')
      }
    },
  }
</script>

<style scoped>
  @import "assets/css/owl.carousel.min.css";
  @import "assets/css/owl.theme.default.min.css";

  .img-option {
    object-fit: cover;
    object-position: center;
    max-height: 600px;
    min-width: 100%;
  }
</style>

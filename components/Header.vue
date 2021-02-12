<template>
 <div>
   <ul class="col-12 bg-light d-flex flex-row justify-content-start align-items-center header fixed-top">
     <li>
       <nuxt-link to="/" ref="/index" class="header-item d-flex flex-row justify-content-center align-items-center mr-2">لگوی شرکت</nuxt-link>
     </li>
     <li class="menu-item">
       <p class="header-item p-0 m-0 text-center">خدمات</p>
       <ul class="subMenu bg-light d-flex flex-column">
         <li>
           <nuxt-link to="/consulting" class="header-item text-center">مشاوره</nuxt-link>
         </li>
         <li>
           <nuxt-link to="/transport"  class="header-item text-center">حمل و نقل</nuxt-link>
         </li>
         <li>
           <nuxt-link to="/clearance" class="header-item text-center">ترخیص کالا</nuxt-link>
         </li>
       </ul>
     </li>
     <li>
       <nuxt-link to="/formRequest" class="header-item d-flex flex-row justify-content-center align-items-center">فرم سفارش</nuxt-link>
     </li>
     <li>
       <nuxt-link to="/gallery" class="header-item d-flex flex-row justify-content-center align-items-center">گالری</nuxt-link>
     </li>
     <li>
       <nuxt-link to="/news" class="header-item d-flex flex-row justify-content-center align-items-center">آخرین اخبار</nuxt-link>
     </li>
     <li>
       <nuxt-link to="/aboutus" class="header-item d-flex flex-row justify-content-center align-items-center">درباره ما</nuxt-link>
     </li>
     <li>
       <nuxt-link to="/contactus" class="header-item d-flex flex-row justify-content-center align-items-center">تماس با ما</nuxt-link>
     </li>
   </ul>
 </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>

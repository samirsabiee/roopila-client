<template>
 <div>
   <ul class="col-12 bg-light d-flex flex-row justify-content-start align-items-center header fixed-top">
     <li>
       <a href="/" class="header-item d-flex flex-row justify-content-center align-items-center mr-2">لگوی شرکت</a>
     </li>
     <li class="menu-item">
       <p class="header-item p-0 m-0 text-center">خدمات</p>
       <ul class="subMenu bg-light d-flex flex-column">
         <li>
           <a href="/consulting" class="header-item text-center">مشاوره</a>
         </li>
         <li>
           <a href="/transport" class="header-item text-center">حمل و نقل</a>
         </li>
         <li>
           <a href="/clearance" class="header-item text-center">ترخیص کالا</a>
         </li>
       </ul>
     </li>
     <li>
       <a href="/formRequest" class="header-item d-flex flex-row justify-content-center align-items-center">فرم سفارش</a>
     </li>
     <li>
       <a href="/gallery" class="header-item d-flex flex-row justify-content-center align-items-center">گالری</a>
     </li>
     <li>
       <a href="/lastNews" class="header-item d-flex flex-row justify-content-center align-items-center">آخرین اخبار</a>
     </li>
     <li>
       <a href="/aboutus" class="header-item d-flex flex-row justify-content-center align-items-center">درباره ما</a>
     </li>
     <li>
       <a href="/contactus" class="header-item d-flex flex-row justify-content-center align-items-center">تماس با ما</a>
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

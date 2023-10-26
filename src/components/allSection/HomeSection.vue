<script>
import { defineComponent } from 'vue'
import Store from '../../stores/counter';

export default defineComponent({
   computed: {
      colors(){
         return Store().$state.color
      }
   }
})

</script>

<template>
   <section id="home" class="space-y-10" >
      <div class="space-y-16">
         <div class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit z-[999] border-white">
            <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5l5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
            <p class="uppercase text-sm text-[whitesmoke]">Introduce</p>
         </div>
         <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-4xl text-[whitesmoke]">Say Hi from <span :style="{color: colors}">Abdulrahman</span>, A Software Developer</p>  
         <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:w-[450px] text-[#989898]">I develop and code beautifully simple things and i love what i do. Just simple like that!</p>
      </div>

      <div class="space-y-4 w-full">
         <div class="flex md:justify-end">
            <a href="#portfolio" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="">
               <div class="relative w-fit">
                  <svg class="absolute left-12 top-12" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="white" d="m12 18l-6-6l1.4-1.4l3.6 3.575V6h2v8.175l3.6-3.575L18 12Z"/></svg>
                  <div class="border w-fit p-4 rounded-[50%]">
                     <img class="spin w-fit" src="../../assets/images/projects.png" alt="">
                  </div>
               </div>
            </a>
         </div>

         <div class="flex gap-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-4">
               <p class="text-6xl font-semibold" :style="{color: colors}">1+</p>
               <p class="uppercase text-[#989898]">Years of experience</p>
            </div>
            <div class="space-y-4">
               <p class="text-6xl font-semibold" :style="{color: colors}">7+</p>
               <p class="uppercase text-[#989898]">projects completed</p>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
.spin{
   animation: spin 7s linear infinite;
}
@keyframes spin {
   from{
      transform: rotate(0deg);
   }
   to{
      transform: rotate(360deg);
   }
}
/* .bg{
   background-color: white;
   border-radius: 10px;
   transform: rotateX(10deg) rotateY(10deg);
} */
</style>

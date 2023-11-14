<script>

import { defineComponent } from 'vue';
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
    <section id="portfolio" class="space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit border-white">
            <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
            <p class="uppercase text-sm text-[whitesmoke]">Portfolio</p>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl text-[whitesmoke]">Featured <span :style="{color: colors}">Projects</span></p>
        
        <div class="grid lg:gap-20 gap-10">
            <a target="_blank" href="hub.dervac.com" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="main space-y-2">
                <div class="website relative rounded-2xl overflow-hidden">
                  <img class="w-full" src="../../assets/images/dervac.png" alt="">
                  <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                  <div class="absolute flex gap-4 bottom-4 left-2">
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Vue</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                  </div>
                </div>
                <p class="project hover:underline md:text-2xl text-[whitesmoke]">External Link - Dervac Hub Main Website</p>
            </a>

            <a target="_blank" href="https://abdulrahmanluqman.github.io/advice-generator/" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="main space-y-2">
                <div class="website relative rounded-2xl overflow-hidden">
                  <img class="w-full" src="../../assets/images/advice-generator.png" alt="">
                  <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                  <div class="absolute flex gap-4 bottom-4 left-2">
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Html</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Css</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Javascript</p>
                  </div>
                </div>
                <p class="project hover:underline md:text-2xl text-[whitesmoke]">External Link - Advice Generator</p>
            </a>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-2">
                <div class="website relative rounded-2xl overflow-hidden">
                  <img class="w-full" src="../../assets/images/dashboard.png" alt="">
                  <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                  <div class="absolute flex gap-4 bottom-4 left-2">
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Vue</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Css</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                  </div>
                </div>
                <p class="md:text-2xl text-[whitesmoke]">Gallery - Dashboard</p>
            </div>
            
            <a target="_blank" href="https://anjorin.net" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="main space-y-2">
                <div class="website relative rounded-2xl overflow-hidden">
                  <img class="w-full" src="../../assets/images/Anjorin.png" alt="">
                  <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                  <div class="absolute flex gap-4 bottom-4 left-2">
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Html</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Javascript</p>
                  </div>
                </div>
                <p class="project hover:underline md:text-2xl text-[whitesmoke]">External Link - Chief Technology Of Dervac(portfolio)</p>
              </a>

              <a target="_blank" href="https://growthhorizon.vercel.app/" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="main space-y-2">
                <div class="website relative rounded-2xl overflow-hidden">
                  <img class="w-full" src="../../assets/images/growth_horizon.png" alt="">
                  <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                  <div class="absolute flex gap-4 bottom-4 left-2">
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Vue</p>
                    <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                  </div>
                </div>
                <p class="project hover:underline md:text-2xl text-[whitesmoke]">External Link - Growth Horizon(an earning platform)</p>
              </a>
        </div>
    </section>
</template>

<style scoped>
.website:hover .code{
    background-color: #010001;
    color: whitesmoke;
    transition: all ease-in 700ms;
}

.main:hover .project{
  text-decoration: underline;
  transition: all ease-in 700ms;
}
</style>
<script>

import { defineComponent } from 'vue';
import Store from '../../stores/counter';
export default defineComponent({
  data() {
    return {
      projects: Store().$state.projects,
      currentIndex: 0,
      arrowLeftHovered: false,
      arrowRightHovered: false
    }
  },
  methods: {
        moveCarousel(direction){
            const newIndex = this.currentIndex + direction

            if (newIndex >= 0 && newIndex < this.projects.length) {
                this.currentIndex = newIndex
            }
            console.log(this.currentIndex)
        }
    },
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

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" v-for="(project, index) in projects">
          <div v-show="currentIndex === index">
            <a target="_blank" :href=project.link class="main space-y-2">
                <div class="website relative rounded-2xl overflow-hidden">
                  <img class="w-full md:h-[380px]" :src=project.image :alt="project.comment">
                  <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                  <div class="absolute flex gap-4 bottom-4 left-2">
                    <p v-for="(technology) in project.technologies" :key="technology" class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">{{technology}}</p>
                  </div>
                </div>
                <p class="project hover:underline md:text-2xl text-[whitesmoke]">{{ project.comment }}</p>
            </a>
          </div>
        </div>

        <div class="flex gap-6 items-center">
          <button data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[50%] p-2" @click="moveCarousel(-1)" @mouseover="arrowLeftHovered = true" @mouseleave="arrowLeftHovered = false" :style="arrowLeftHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"/></svg>
          </button>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="text-[whitesmoke]">{{ currentIndex + 1 }}<span class="opacity-20"> / {{ projects.length }}</span></p>
          <button data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[50%] p-2" @click="moveCarousel(+1)" @mouseover="arrowRightHovered = true" @mouseleave="arrowRightHovered = false" :style="arrowRightHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"/></svg>
          </button>
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
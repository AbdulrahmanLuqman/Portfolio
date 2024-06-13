<template>
    <section id="skills" class="space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit border-white">
            <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="white" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48Zm-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4Zm-4 56h-80v-48h80Z"/></svg>
            <p class="uppercase text-sm text-[whitesmoke]">Skills</p>
        </div>

        <div class="space-y-10">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl text-[whitesmoke]">My <span :style="{color: colors}">Advantages</span></p>
            <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="htmlHovered = true" @mouseleave="htmlHovered = false" :style="htmlHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/html.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">90%</p>
                </div>

                <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="cssHovered = true" @mouseleave="cssHovered = false" :style="cssHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/css.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">88%</p>
                </div>

                <div  data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="sassHovered = true" @mouseleave="sassHovered = false" :style="sassHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/sass.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">61%</p>
                </div>

                <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="lessHovered = true" @mouseleave="lessHovered = false" :style="lessHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/less.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">57%</p>
                </div>

                <div  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="tailwindHovered = true" @mouseleave="tailwindHovered = false" :style="tailwindHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/tailwind.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">93%</p>
                </div>

                <div  data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="jsHovered = true" @mouseleave="jsHovered = false" :style="jsHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/js.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">80%</p>
                </div>

                <div  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="jqueryHovered = true" @mouseleave="jqueryHovered = false" :style="jqueryHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/jquery.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">55%</p>
                </div>

                <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="vueHovered = true" @mouseleave="vueHovered = false" :style="vueHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/vue.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">70%</p>
                </div>

                <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="vueHovered = true" @mouseleave="vueHovered = false" :style="vueHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/react.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">75%</p>
                </div>

                <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10 bg-transparent" @mouseover="githubHovered = true" @mouseleave="githubHovered = false" :style="githubHovered ? { borderColor: colors, borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s' } : {borderColor: '#565656', borderWidth: '1px', borderStyle: 'solid', transition: 'all 0.4s'}">
                    <img class="w-[100px]" src="../../assets/images/github.png" alt="">
                    <p class="text-4xl" :style="{color: colors}">89%</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { defineComponent } from 'vue';
import Store from '../../stores/counter';
export default defineComponent({
    data(){
        return{
            htmlHovered: false,
            cssHovered: false,
            sassHovered: false,
            lessHovered: false,
            tailwindHovered: false,
            jsHovered: false,
            jqueryHovered: false,
            vueHovered: false,
            githubHovered: false,

        }
    },
   computed: {    
    colors(){
        return Store().$state.color
    }
   }
})
</script>
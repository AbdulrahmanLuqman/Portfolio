<script>
import { defineComponent } from 'vue'
import Store from '../../stores/counter';

export default defineComponent({
    data(){
        return{
            showExperience: true,
            year2023Hovered: false,
            year2022Hovered: false,
            year2019Hovered: false,
            year2017Hovered: false,
            yearUnknownHovered: false
        }
    },
    computed: {
    colors(){
        return Store().$state.color
    },
    showEd(){
        if (!this.showExperience) {
            return {color : this.colors}
            
        } else {
            return {color : 'white', textDecoration: 'underline', cursor: 'pointer'}
        }
    },
    showEx(){
        if (this.showExperience) {
            return {color : this.colors}
            
        } else {
            return {color : 'white', textDecoration: 'underline', cursor: 'pointer'}
        }
    }
   }
})
</script>

<template>
    <section id="resume" class="space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit border-white">
            <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
            <p class="uppercase text-sm text-[whitesmoke]">Resume</p>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-5xl text-3xl text-[whitesmoke]"> <span :style="showEd" @click="showExperience = false">Education</span> & <span :style="showEx" @click="showExperience = true">Experience</span></p>
        <div>
            <div class="flex flex-col" v-if="showExperience">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6"  @mouseover="year2023Hovered = true" @mouseleave="year2023Hovered = false">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] rounded-[50%]" :style="year2023Hovered ? { backgroundColor: colors, transition: 'all 0.5s' } : {backgroundColor: '#989898'}"></div>
                    <p class="years transition-text duration-500 text-lg text-whitesmoke" :style="year2023Hovered ? { color: colors, transition: 'all 0.5s' } : {color: 'whitesmoke'}">2023 - present</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">Frontend Developer</p>
                            <p class="text-[#989898]">Dervac</p>
                        </div>
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">Frontend Developer</p>
                            <p class="text-[#989898]">Kingsbridge</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6" @mouseover="year2022Hovered = true" @mouseleave="year2022Hovered = false">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]" :style="year2022Hovered ? { backgroundColor: colors, transition: 'all 0.5s' } : {backgroundColor: '#989898'}"></div>
                    <p class="years transition-text duration-500 text-lg text-[whitesmoke]"  :style="year2022Hovered ? { color: colors, transition: 'all 0.5s' } : {color: 'whitesmoke'}">2022 - present</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">Frontend Developer</p>
                            <p class="text-[#989898]">W3School</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col" v-else>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6" @mouseover="year2019Hovered = true" @mouseleave="year2019Hovered = false">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]" :style="year2019Hovered ? { backgroundColor: colors, transition: 'all 0.5s' } : {backgroundColor: '#989898'}"></div>
                    <p class="years transition-text duration-500 text-lg text-[whitesmoke]" :style="year2019Hovered ? { color: colors, transition: 'all 0.5s' } : {color: 'whitesmoke'}">2023 - present</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">University Education</p>
                            <p class="text-[#989898]">Lasustech</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6" @mouseover="year2019Hovered = true" @mouseleave="year2019Hovered = false">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]" :style="year2019Hovered ? { backgroundColor: colors, transition: 'all 0.5s' } : {backgroundColor: '#989898'}"></div>
                    <p class="years transition-text duration-500 text-lg text-[whitesmoke]" :style="year2019Hovered ? { color: colors, transition: 'all 0.5s' } : {color: 'whitesmoke'}">2019 - 2021</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">Secondary School Education</p>
                            <p class="text-[#989898]">Ajayi Crowther Memorial Senior Grammar School</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-[250px] space-y-6" @mouseover="year2017Hovered = true" @mouseleave="year2017Hovered = false">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]" :style="year2017Hovered ? { backgroundColor: colors, transition: 'all 0.5s' } : {backgroundColor: '#989898'}"></div>
                    <p class="years transition-text duration-500 text-lg text-[whitesmoke]" :style="year2017Hovered ? { color: colors, transition: 'all 0.5s' } : {color: 'whitesmoke'}">2017 - 2019</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">Junior Secondary School</p>
                            <p class="text-[#989898]">St Lukes Junior Grammar School</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-[250px] space-y-6" @mouseover="yearUnknownHovered = true" @mouseleave="yearUnknownHovered = false">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]" :style="yearUnknownHovered ? { backgroundColor: colors, transition: 'all 0.5s' } : {backgroundColor: '#989898'}"></div>
                    <p class="years transition-text duration-500 text-lg text-[whitesmoke]" :style="yearUnknownHovered ? { color: colors, transition: 'all 0.5s' } : {color: 'whitesmoke'}">**** - 2017</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl text-[whitesmoke]">Primary School</p>
                            <p class="text-[#989898]">Mountaineer/Bishop Crowther</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
</style>
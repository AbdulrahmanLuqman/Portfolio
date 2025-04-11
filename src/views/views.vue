<script>
import { defineComponent } from 'vue'
import HomeSection from '../components/allSection/HomeSection.vue';
import AboutSection from '../components/allSection/AboutSection.vue'
import ResumeSection from '../components/allSection/ResumeSection.vue'
import ServicesSection from '../components/allSection/ServicesSection.vue';
import SkillsSection from '../components/allSection/SkillsSection.vue'
import PortfolioSection from '../components/allSection/PortfolioSection.vue';
import TestimonialSection from '../components/allSection/TestimonialSection.vue';
import ContactSection from '../components/allSection/ContactSection.vue';


export default defineComponent({
    components:{ HomeSection, AboutSection, ResumeSection, ServicesSection, SkillsSection, PortfolioSection, TestimonialSection, ContactSection },
    data(){
        return{

        }
    },
})
</script>

<template>
  <div class="lg:pl-12 lg:px-6 px-2 pb-20 w-full">
    <HomeSection class="pb-2 pt-20" />
    <AboutSection class="py-[160px]" />
    <ResumeSection class="py-[80px]" />
    <ServicesSection class="py-[80px]" />
    <SkillsSection class="py-[80px]" />
    <PortfolioSection class="py-[80px]" />
    <TestimonialSection class="py-[80px]" />
    <ContactSection class="py-[80px]" />
  </div>
</template>

<style scoped>

</style>

<script>
import { defineComponent } from 'vue';
import Profile from './components/Profile.vue'
import Views from './views/views.vue';
import Nav from './components/Nav.vue';
import Store from './stores/counter'

export default defineComponent({
    components:{ Profile, Views, Nav},
    data(){
        return{
            // inDarkMode: true
            showHomeName: Store().$state.show,
            showAboutName: Store().$state.show,
            showResumeName: Store().$state.show,
            showServicesName: Store().$state.show,
            showSkillsName: Store().$state.show,
            showPortfolioName: Store().$state.show,
            showTestimonialName: Store().$state.show,
            showContactName: Store().$state.show,
            showSideNavs: Store().$state.show,
            showExperience: true,
            collaborators: Store().$state.collaborators,
            currentIndex: 0
        }
    },
    methods: {
        moveCarousel(direction){
            const newIndex = this.currentIndex + direction

            if (newIndex >= 0 && newIndex < this.collaborators.length) {
                this.currentIndex = newIndex
            }
            console.log(this.currentIndex)
        }
    },
    computed: {
        inLightMode(){
            return Store().inLightMode
        }
    }
})
</script>

<template>
   <div class="flex gap-8 lg:gap-0 lg:flex-row flex-col justify-between transition-bg duration-700" :class="inLightMode ? 'bg-[whitesmoke ]' : 'bg-[#010001]'">
    <div>
        <Profile />
    </div>
    <div>
        <Views />
    </div>
    <div>
        <Nav />
    </div>
   </div>
</template>

<style>
html{
  scroll-behavior: smooth;
}
.background{
  background: linear-gradient(to bottom, #E4EAED, #F6F8F9);
  border: none;
  box-shadow: 10px 10px 12px rgb(217, 211, 211), -10px -10px 12px rgb(217, 211, 211);
}
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

.hire:hover p{
  color: #565656;
}

.box:hover .circle{
    background-color: #F31313;
    transition: all 0.5s;
}
.box:hover .years{
    color: #F31313;
    transition: all 0.5s;
}

.boxx:hover .projects{
    text-decoration: underline;
}

.website:hover .code{
    background-color: #010001;
    color: whitesmoke;
    transition: all ease-in 700ms;
}
</style>

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
            // bgImage: Store().$state.backgroundimage
        }
    },
    computed: {
        bgImage(){
            return Store().$state.backgroundimage
        }
    },
    mounted(){
        console.log(Store().$state.backgroundimage)
    }
})
</script>

<template>
    <!-- <div :style="{backgroundImage: `url(${bgImage})`}" class="bg-image"> -->
    <div class="bg-image">
        <div class="bg-black fixed opacity-50 top-0 h-screen w-full"></div>
    </div>
   <div class="flex gap-8 lg:gap-0 lg:flex-row flex-col justify-between transition-bg duration-700">
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
.bg-image{
    background-image: url(./assets/images/earth-lines-sphere.jpg);
    background-position: center;
    height: 100vh;
    width: 100%;
    background-size: cover;
    /* background-attachment: fixed; */
    position: fixed;
    top: 0;
    z-index: -1;
}
</style>

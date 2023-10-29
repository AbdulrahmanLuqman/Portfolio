<script>
import { defineComponent } from 'vue';
import Store from '../stores/counter';
export default defineComponent({

  data(){
    return{
      showSideContainer: Store().$state.show,
      greenDot: false,
      yellowDot: false,
      orangeDot: false,
      lightBlueDot: false,
      grayDot: false,
      pinkDot: false,
      redDot: true,
      hovered: false,
      githubSocialHovered: false,
      linkedinSocialHovered: false,
      twitterSocialHovered: false

    }
  },
  methods:{
    green(){
      Store().$state.color = "#28E98C",
      this.greenDot = true,
      this.yellowDot = false,
      this.orangeDot = false,
      this.lightBlueDot = false,
      this.grayDot = false,
      this.pinkDot = false,
      this.redDot = false
      this.showSideContainer = false
    },
    yellow(){
      Store().$state.color = "#E4AF12",
      this.greenDot = false,
      this.yellowDot = true,
      this.orangeDot = false,
      this.lightBlueDot = false,
      this.grayDot = false,
      this.pinkDot = false,
      this.redDot = false
      this.showSideContainer = false
    },
    orange(){
      Store().$state.color = "#FE6F1D",
      this.greenDot = false,
      this.yellowDot = false,
      this.orangeDot = true,
      this.lightBlueDot = false,
      this.grayDot = false,
      this.pinkDot = false,
      this.redDot = false
      this.showSideContainer = false
    },
    lightblue(){
      Store().$state.color = "#14C5FD",
      this.greenDot = false,
      this.yellowDot = false,
      this.orangeDot = false,
      this.lightBlueDot = true,
      this.grayDot = false,
      this.pinkDot = false,
      this.redDot = false
      this.showSideContainer = false
    },
    gray(){
      Store().$state.color = "#C0C0C0",
      this.greenDot = false,
      this.yellowDot = false,
      this.orangeDot = false,
      this.lightBlueDot = false,
      this.grayDot = true,
      this.pinkDot = false,
      this.redDot = false
      this.showSideContainer = false
    },
    pink(){
      Store().$state.color = "#FF99CC",
      this.greenDot = false,
      this.yellowDot = false,
      this.orangeDot = false,
      this.lightBlueDot = false,
      this.grayDot = false,
      this.pinkDot = true,
      this.redDot = false
      this.showSideContainer = false
    },
    red(){
      Store().$state.color = "#F31313",
      this.greenDot = false,
      this.yellowDot = false,
      this.orangeDot = false,
      this.lightBlueDot = false,
      this.grayDot = false,
      this.pinkDot = false,
      this.redDot = true
      this.showSideContainer = false
    }
  },
  computed: {
    year(){
      var date = new Date();
      var currentDay = date.getFullYear();
      return currentDay
    },
    colors(){
      return Store().$state.color
    }
  }
})
</script>

<template>
  
   <div class="sticky top-0">
     <div class="lg:h-screen lg:w-[390px] md:w-[90%]  border border-[#565656] relative rounded-[40px] lg:ml-6 md:mx-6 bg-transparent">
      <div @click="showSideContainer = true" class="fixed z-[999] bg-[#1F1F1F] lg:absolute lg:left-[-18px] top-12 w-fit h-fit p-2 rounded-md cursor-pointer">
          <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#E5EAED" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z"/></svg>
      </div>
        <div class="px-4 py-8 space-y-6 flex flex-col items-center">
          <div class="w-full grid grid-cols-2 gap-2 items-center gap-8">
            <img src="../assets/images/Abdulrahman.png" class="w-full " alt="My Name/Logo">
            <p class="mt-2 font-semibold w-full text-[#F9F9F9]">Software Developer</p>
          </div>
          <div class="bg-[#ACACAC] h-[200px] w-[250px] rounded-[30px]">
            <img src="../assets/images/Abdulrahman.jpg" class="h-[200px] w-[250px] rounded-[30px]" alt="My Image">
          </div>
          <div class="space-y-2 text-center">
            <a href="mailto:luqmanola60@gmail.com" class="text-[#F9F9F9] text-2xl text-[#F9F9F9]">luqmanola60@gmail.com</a>
            <p class="text-2xl text-[#F9F9F9]">Based in Bariga, Lagos</p>
          </div>
          <p class="text-[#8B8B8B]"> {{ year }} Abdulrahman. All Rights Reserved</p>
          <div class="flex gap-4">
            <a target="_blank" href="https://github.com/AbdulrahmanLuqman/" @mouseover="githubSocialHovered = true" @mouseleave="githubSocialHovered = false" :style="githubSocialHovered ? {borderColor: colors, borderStyle: 'solid', borderWidth: '2px', color: colors} : {borderColor: '#565656', borderStyle: 'solid', borderWidth: '2px'}" class="p-2 rounded-[50%] transition-border duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#565656" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/abdulrahman-luqman-80243a23a/" @mouseover="linkedinSocialHovered = true" @mouseleave="linkedinSocialHovered = false" :style="linkedinSocialHovered ? {borderColor: colors, borderStyle: 'solid', borderWidth: '2px', color: colors} : {borderColor: '#565656', borderStyle: 'solid', borderWidth: '2px'}" class="p-2 rounded-[50%] transition-border duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#565656" d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"/></svg>
            </a>
            <a target="_blank" href="https://twitter.com/luqmanola60" @mouseover="twitterSocialHovered = true" @mouseleave="twitterSocialHovered = false" :style="twitterSocialHovered ? {borderColor: colors, borderStyle: 'solid', borderWidth: '2px', color: colors} : {borderColor: '#565656', borderStyle: 'solid', borderWidth: '2px'}" class="p-2 rounded-[50%] border border-2 border-[#565656] transition-border duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#565656" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg>
            </a>
          </div>
          <!-- <div class="w-[90%] cursor-pointer py-4 rounded-[50px] flex items-center justify-center gap-2 transition-bg duration-500"  :class="green ? 'bg-[#28E98C] hover:bg-transparent hover:text-[#28E98C] border border-2 border-[#28E98C] hover:border hover:border-2 hover:border-[#28E98C]' : gold ? 'bg-[#E4AF12] hover:bg-transparent hover:text-[#E4AF12] border border-2 border-[#E4AF12] hover:border hover:border-2 hover:border-[#E4AF12]' : orange ? 'bg-[#FE6F1D] hover:bg-transparent hover:text-[#FE6F1D] border border-2 border-[#FE6F1D] hover:border hover:border-2 hover:border-[#FE6F1D]' : blue ? 'bg-[#14C5FD] hover:bg-transparent hover:text-[#14C5FD] border border-2 border-[#14C5FD] hover:border hover:border-2 hover:border-[#14C5FD]' : grey ? 'bg-[#C0C0C0] hover:bg-transparent hover:text-[#C0C0C0] border border-2 border-[#C0C0C0] hover:border hover:border-2 hover:border-[#C0C0C0]' : red ? 'bg-[#F31313] hover:bg-transparent hover:text-[#F31313] border border-2 border-[#F31313] hover:border hover:border-2 hover:border-[#F31313]' : pink ? 'bg-[#FF99CC] hover:bg-transparent hover:text-[#FF99CC] border border-2 border-[#FF99CC] hover:border hover:border-2 hover:border-[#FF99CC]'  : 'bg-[#F31313] hover:bg-transparent hover:text-[#F31313] border border-2 border-[#F31313] hover:border hover:border-2 hover:border-[#F31313]'"> -->
          <a href="#contact" @mouseover="hovered = true" @mouseleave="hovered = false" :style="hovered ? {backgroundColor: 'transparent', borderColor: colors, borderStyle: 'solid', borderWidth: '1px', color: colors} : {backgroundColor: colors, border: colors}" class="text-lg transition-bg duration-500 md:w-[90%] w-full cursor-pointer py-4 rounded-[50px] flex items-center justify-center">
            Hire me!
          </a> 
        </div>
      </div>
   </div>   
 
   <!-- side container -->
   <div class="bg-[#181818] lg:w-[80%] w-full space-y-20 p-6 h-screen fixed top-0 z-[999] transition-right duration-700"  :class="showSideContainer ? 'right-0' : 'right-[100%] overflow-hidden'">
    <div @click="showSideContainer = false" class="w-fit absolute right-2 top-6 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="green" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
    </div>

    <div class="space-y-10">
      <p class="text-3xl text-[whitesmoke]">Configuration</p>

      <div class="space-y-4">
        <p class="text-[whitesmoke]">Colors</p>
        <div class="grid lg:grid-cols-7 w-fit md:grid-cols-6 grid-cols-3 gap-6 items-center">
          <div @click="green" class="relative">
            <div :class="greenDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#28E98C]"></div>
              <div v-show="greenDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
          <div @click="yellow" class="relative">
            <div :class="yellowDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#E4AF12]"></div>
              <div v-show="yellowDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
          <div @click="orange" class="relative">
            <div :class="orangeDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#FE6F1D]"></div>
              <div v-show="orangeDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
          <div @click="lightblue" class="relative">
            <div :class="lightBlueDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#14C5FD]"></div>
              <div v-show="lightBlueDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
          <div @click="gray" class="relative">
            <div :class="grayDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#C0C0C0]"></div>
              <div v-show="grayDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
          <div @click="pink" class="relative">
            <div :class="pinkDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#FF99CC]"></div>
              <div v-show="pinkDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
          <div @click="red" class="relative">
            <div :class="redDot ? 'border-white border rounded-[50%] p-[4px]' : 'hover:border-white hover:border hover:rounded-[50%] hover:p-[4px]'">
              <div class="w-[30px] h-[30px] rounded-[50%] bg-[#F31313]"></div>
              <div v-show="redDot" class="absolute left-0 right-0 m-auto top-0 bottom-0 bg-white w-[10px] h-[10px] rounded-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   <div @click="showSideContainer = false" class="w-full h-screen fixed top-0 opacity-[0.2] bg-black" v-show="showSideContainer">

   </div>

</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/appStore";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const isMouseNearNavbar1 = ref(false);
const isMouseNearNavbar2 = ref(false);
const isMouseNearNavbar3 = ref(false);
const isMouseNearNavbar4 = ref(false);
const isMouseNearNavbar5 = ref(false);
const isMouseNearNavbar6 = ref(false);


const navbarRef1 = ref(null);
const navbarRef2 = ref(null);
const navbarRef3 = ref(null);
const navbarRef4 = ref(null);
const navbarRef5 = ref(null);
const navbarRef6 = ref(null);
 enum EventView {
  DEFAULT = 'default',
  FOCUSED = 'focused'
}



function handleMouseEnter1() {
    isMouseNearNavbar1.value = false;
}

function handleMouseLeave1() {
    isMouseNearNavbar1.value = true;
}

function handleMouseEnter2() {
    isMouseNearNavbar2.value = false;
}

function handleMouseLeave2() {
    isMouseNearNavbar2.value = true;
}
function handleMouseEnter3() {
    isMouseNearNavbar3.value = false;
}

function handleMouseLeave3() {
    isMouseNearNavbar3.value = true;
}
function handleMouseEnter4() {
    isMouseNearNavbar4.value = false;
}

function handleMouseLeave4() {
    isMouseNearNavbar4.value = true;
}

function handleMouseEnter5() {
    isMouseNearNavbar5.value = false;
}

function handleMouseLeave5() {
    isMouseNearNavbar5.value = true;
}
function handleMouseEnter6() {
    isMouseNearNavbar6.value = false;
}

function handleMouseLeave6() {
    isMouseNearNavbar6.value = true;
}

</script>

<template>
        <div v-if="useAppStore().currentEventView == EventView.DEFAULT">

<router-link to="/">
<div ref="navbarRef1" @mouseenter="handleMouseEnter1" @mouseleave="handleMouseLeave1"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar1 }" class="fixed top-0 left-0 h-screen w-custom 
m-0 flex duration-250  
flex-col fas fa-home fa-3x items-center justify-center h-custom-icon w-custom-icon
mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-yellow-400 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 transition-all duration-300 rounded-full
ease-linear cursor-pointer glow">
            </div>
            </router-link>

<router-link to="jurney">
<div ref="navbarRef2" @mouseenter="handleMouseEnter2" @mouseleave="handleMouseLeave2"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar2 }" class="fixed top-0 right-0 h-screen w-custom 
m-0 flex duration-250  
flex-col fas fa-leaf fa-3x items-center justify-center h-custom-icon w-custom-icon
mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 transition-all duration-300 rounded-full
ease-linear cursor-pointer glow ">
            </div>
            </router-link>

<router-link to="portfolio">
<div ref="navbarRef3" @mouseenter="handleMouseEnter3" @mouseleave="handleMouseLeave3"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar3 }" class="fixed bottom-0 left-0 h-screen w-custom 
m-0 flex duration-250
flex-col fas fa-microchip fa-3x items-center justify-center h-custom-icon w-custom-icon
mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-blue-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 transition-all duration-300 rounded-full
ease-linear cursor-pointer glow">
            </div>
            </router-link>


<router-link to="fax">
<div ref="navbarRef4" @mouseenter="handleMouseEnter4" @mouseleave="handleMouseLeave4"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar4 }" class="fixed bottom-0 right-0 h-screen w-custom 
m-0 flex duration-250
flex-col fas fa-fire fa-3x items-center justify-center h-custom-icon w-custom-icon
mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-red-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 transition-all duration-300 rounded-full
ease-linear cursor-pointer glow ">
            </div>
            </router-link>

<a href="https://github.com/nekagit" target="_blank">
            <div ref="navbarRef5" @mouseenter="handleMouseEnter5" @mouseleave="handleMouseLeave5"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar5 }" class="fixed center 
m-0 flex duration-250  
custom-github items-center justify-center 
bottom-0 mb-4 ml-16 mr-0 shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 duration-300 rounded-full
ease-linear cursor-pointer glow image-githubneka">
            </div>
          </a>

<a href="https://github.com/Pocucaa" target="_blank">
            <div ref="navbarRef6" @mouseenter="handleMouseEnter6" @mouseleave="handleMouseLeave6"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar6 }" class="fixed center 
m-0 flex duration-250  
custom-github items-center justify-center 
bottom-0 mb-4 ml-0 shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 duration-300 rounded-full
ease-linear cursor-pointer glow image-githubpocuca">
            </div>
          </a>


        </div>
</template>

<style scoped>

.image-xenomorph {
  /* Set the background image */
  background-image: url('../src/assets/img/xenomorph.jpg');
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
  height: 3rem;
  width: 3rem;
}

</style>
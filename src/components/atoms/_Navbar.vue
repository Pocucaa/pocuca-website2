<script setup lang="ts">
import { ref } from "vue";

const isMouseNearNavbar1 = ref(false);
const isMouseNearNavbar2 = ref(false);
const isMouseNearNavbar3 = ref(false);
const isMouseNearNavbar4 = ref(false);


const navbarRef1 = ref(null);
const navbarRef2 = ref(null);
const navbarRef3 = ref(null);
const navbarRef4 = ref(null);



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

</script>

<template>
        <div>

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


            <div ref="navbarRef2" @mouseenter="handleMouseEnter2" @mouseleave="handleMouseLeave2"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar2 }" class="fixed center 
m-0 flex duration-250  
custom-github items-center justify-center 
bottom-0 mb-4 ml-16 mr-0 shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 duration-300 rounded-full
ease-linear cursor-pointer glow image-githubneka">
            </div>

            <div ref="navbarRef2" @mouseenter="handleMouseEnter2" @mouseleave="handleMouseLeave2"
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar2 }" class="fixed center 
m-0 flex duration-250  
custom-github items-center justify-center 
bottom-0 mb-4 ml-0 shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 duration-300 rounded-full
ease-linear cursor-pointer glow image-githubpocuca">
            </div>



        </div>
</template>

<style scoped>

@keyframes glow {
  0% {
    box-shadow: 0 0 30px rgb(84, 8, 236);
  }
  50% {
    box-shadow: 0 0 40px rgb(82, 52, 111);
  }
  100% {
    box-shadow: 0 0 30px rgb(84, 8, 236);
  }
}

.glow {
  animation: glow 3s infinite; /* Adjust the duration as needed */
}

@keyframes custom-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.custom-glow {
  animation: custom-pulse 20s infinite;
}

.image-githubneka {
  /* Set the background image */
  background-image: url('../src/assets/img/nekagit.png');
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
  height: 3rem;
  width: 3rem;
}

.image-githubpocuca {
  /* Set the background image */
  background-image: url('../src/assets/img/pocuca.png');
  /* Adjust background properties as needed */
  background-size: cover;
  background-position: center;
  height: 3rem;
  width: 3rem;
}

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
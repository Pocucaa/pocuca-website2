<script setup lang="ts">

</script>

<template>
    <a href="https://github.com/nekagit" target="_blank">
            <div ref="navbarRef5" 
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar5 }" class="fixed center 
m-0 flex duration-250  
custom-github items-center justify-center 
bottom-0 mb-4 ml-16 mr-0 shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 duration-300 rounded-full
ease-linear cursor-pointer glow image-githubneka">
            </div>
          </a>

<a href="https://github.com/Pocucaa" target="_blank">
            <div ref="navbarRef6" 
:class="{ 'opacity-0 custom-glow': isMouseNearNavbar6 }" class="fixed center 
m-0 flex duration-250  
custom-github items-center justify-center 
bottom-0 mb-4 ml-0 shadow-lg bg-gray-800 text-green-500 hover:bg-green-700
hover:text-white rounded-3x1 hover:rounded-x1 duration-300 rounded-full
ease-linear cursor-pointer glow image-githubpocuca">
            </div>
          </a>


<p>made by &copy; Pocuca &copy; nekagit</p>
</template>

<style scoped>
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

p {
    font-size: 1rem;
    margin-left: 10rem;
    position: fixed;
    bottom: 1.5rem;
    color: rgb(87, 177, 255);
}
</style>
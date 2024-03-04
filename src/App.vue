<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "@/assets/css/bootstrap.min.css" 
import "@/assets/css/fancybox/jquery.fancybox.css"
import "@/assets/css/flexslider.css"
import "@/assets/css/style.css" 
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

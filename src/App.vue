<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import "@/assets/css/style.css" 

const route = useRoute()

// Check if the current route is the home route
const isHomeRoute = route.name === 'Home'
</script>

<template>
  <div>
    <nav>
      <!-- Your navigation elements here -->
    </nav>

    <!-- Place HomeLayout outside of RouterView -->
    <HomeLayout v-if="isHomeRoute" />

    <router-view v-if="!isHomeRoute" />

    <CustomFooter />
  </div>
</template>


<style scoped>
/* Your scoped styles here */
</style>


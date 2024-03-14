<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "@/assets/css/style.css" 
</script>

<template>
  <main>
  <header>
      <nav>
        <RouterLink to="/">Back Home</RouterLink>
    </nav>
  </header>

  <RouterView />
  </main>
</template>

<style scoped>

</style>

<script setup lang="ts">
import CustomNavbar from "@/components/organisms/CustomNavbar.vue";
import CustomFooter from "@/components/organisms/CustomFooter.vue";
import CustomCard from "@/components/organisms/CustomCard.vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.fullPath, window.location.href);
</script>

<template>
  <div>
    <nav>
      <CustomNavbar />
    </nav>
  </div>

  <div v-if='route.fullPath == "/" '>
      <CustomCard /> 
  </div>


    <CustomFooter />
    <RouterView />
</template>

<style scoped>

</style>

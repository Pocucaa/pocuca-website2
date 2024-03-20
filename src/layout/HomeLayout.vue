<script setup lang="ts">
import CustomNavbar from "@/components/organisms/CustomNavbar.vue";
import CustomFooter from "@/components/organisms/CustomFooter.vue";
import CustomCard from "@/components/organisms/CustomCard.vue";

</script>

<template>
  <div>
    <nav>
      <CustomNavbar />
    </nav>
  </div>

  <div>
      <!-- <CustomCard /> -->
  </div>







    <CustomFooter />


    <RouterView />
</template>

<style scoped>

</style>

<script setup lang="ts">
import CustomNavbar from "@/components/organisms/CustomNavbar.vue";
import CustomFooter from "@/components/organisms/CustomFooter.vue";

</script>

<template>
  <div>
    <nav>
      <CustomNavbar />
    </nav>
  </div>


    <CustomFooter />

  <RouterView />
</template>

<style scoped>

</style>

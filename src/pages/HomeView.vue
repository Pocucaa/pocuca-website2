<template>
    <div class="scroll">
    <div class="CustomLinks">
    <CustomLinks />
    </div>
      
  <CustomFooter />

    </div>
</template>

<script setup lang="ts">
import CustomFooter from '@/components/organisms/CustomFooter.vue'
import CustomLinks from '@/components/organisms/CustomLinks.vue'
</script>

<style scoped>
.CustomLinks {
    position: fixed;
    bottom: -8%;
    left: 12%;
    width: 100%;
    padding: 10px;
    text-align: center;
}

.scroll {
  height: 2000px; /* Just for demonstration */
}
</style>
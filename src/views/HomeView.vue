
<script setup lang ="ts">
import CustomNavbar from "@/components/organisms/CustomNavbar.vue"
import CustomFax from "@/components/organisms/CustomFax.vue"
import { RouterView} from 'vue-router'
</script>

<template>
    <nav>
    <CustomNavbar />
    </nav>
    <RouterView />

</template>

<style scoped>

</style>

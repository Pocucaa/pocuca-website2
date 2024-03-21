<script setup lang="ts">
import CustomFooter from '@/components/organisms/CustomFooter.vue'
import CustomNavbar from '@/components/organisms/CustomNavbar.vue'
import { EventView, useAppStore } from '@/stores/appStore'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.fullPath, window.location.href)
</script>
<template>
  <!-- <div v-if='route.fullPath == "/" '> -->
  <!-- <CustomCard />  -->
  <!-- asdf
  </div> -->

  <div v-if="useAppStore().currentEventView != EventView.FOCUSED">
    <nav >
      <CustomNavbar />
    </nav>
  </div>
  <div v-else>
    <button
      @click="useAppStore().setDefaultEventView()"
      type="button"
      class="btn text-white bg-red-500 px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 float-right"
    >
      x
    </button>
  </div>

  <CustomFooter />
  <RouterView />
</template>

<style scoped></style>

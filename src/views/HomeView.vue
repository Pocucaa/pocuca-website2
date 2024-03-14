<script setup lang="ts">
import { ref } from "vue";
import CustomNavbar from "@/components/organisms/CustomNavbar.vue";

const isMouseNearNavbar = ref(false);
const navbarRef = ref(null);

function handleMouseEnter() {
  isMouseNearNavbar.value = false;
}

function handleMouseLeave() {
  isMouseNearNavbar.value = true;
}
</script>

<template>
  <div>
    <nav>
      <CustomNavbar />
    </nav>
  </div>

  <div class="lines">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
    </div>


  <RouterView />
</template>

<style scoped>
.floatNav {
}

.floatNavItem {

}
</style>

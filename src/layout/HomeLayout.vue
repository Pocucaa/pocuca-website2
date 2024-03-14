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


    <footer>
    <p>Made by &copy; nekagit &copy; Pocuca</p>
    </footer>

  <RouterView />
</template>

<style scoped>
.floatNav {
}

.floatNavItem {

}
</style>

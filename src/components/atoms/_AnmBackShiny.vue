<template>
  <div class="gradient"></div>

  <div class="gradient bottom-0 right-0"></div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.gradient {
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  position: fixed;
  top: 0;
  left: 0;

  width: var(--size) + 30px;
  height: var(--size) + 20px;
  filter: blur(calc(var(--size) / 5));
  z-index: -1; /* Ensure the background is behind everything */
  pointer-events: none; /* Allow clicks and interactions to pass through */
  background-image: linear-gradient(hsl(158, 82%, 57%, 0.85), hsl(252, 82%, 57%));
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}

body {
  margin: 0; /* Reset default margin */
  padding: 0; /* Reset default padding */
  background-color: #222;
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
}

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.25s ease-out;
}
</style>

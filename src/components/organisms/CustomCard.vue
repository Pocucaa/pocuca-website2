<template>
    <div class="card">
      <div class="card-content">
        asdf
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc; /* Border style */
    border-radius: 8px; /* Border radius for rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
  }
  
  .card-content {
    padding: 20px; /* Padding for content */
  }
  </style>
  
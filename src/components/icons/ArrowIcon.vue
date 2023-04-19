<script setup lang="ts">
defineProps<{
  cssClass: string
}>()
</script>

<template>
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.00001 0.916664V9.08333M5.00001 9.08333L9.08334 5M5.00001 9.08333L0.916672 5"
      :class="cssClass"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

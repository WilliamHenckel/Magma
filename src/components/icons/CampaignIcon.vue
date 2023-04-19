<script setup lang="ts">
defineProps<{
  cssClass: string
}>()
</script>

<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.33331 11.3333L7.99998 14.6667L14.6666 11.3333M1.33331 7.99999L7.99998 11.3333L14.6666 7.99999M7.99998 1.33333L1.33331 4.66666L7.99998 7.99999L14.6666 4.66666L7.99998 1.33333Z"
      :class="cssClass"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

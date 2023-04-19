<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import ArrayView from '@/views/array/ArrayView.vue'
</script>

<template>
  <div class="flex flex-col w-full">
    <SectionHeader title="Product recruitment" />
    <div class="p-8 flex flex-col space-y-6">
      <SearchBar />
      <ArrayView />
    </div>
  </div>
</template>

<template>
  <div class="flex">
    <SidebarView />
    <SectionView />
  </div>
</template>

<script lang="ts">
import SidebarView from './views/sidebar/SidebarView.vue'
import SectionView from './views/section/SectionView.vue'

export default {
  components: {
    SidebarView,
    SectionView
  }
}
</script>

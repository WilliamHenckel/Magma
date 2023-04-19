<template>
  <div class="flex">
    <SidebarView />
    <main><SectionView /></main>
  </div>
</template>

<script lang="ts">
import SidebarView from './views/sidebar/SidebarView.vue'
import SectionView from './views/section/SectionView.vue'

// import json from './assets/data.json'

export default {
  components: {
    SidebarView,
    SectionView
  },

  data() {
    return {
      // myJson: json
    }
  }
}
</script>

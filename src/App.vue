<template>
  <div class="hidden md:flex">
    <SidebarView />
    <SectionView />
  </div>
  <MobileWarning />
</template>

<script lang="ts">
import SidebarView from './views/sidebar/SidebarView.vue'
import SectionView from './views/section/SectionView.vue'
import MobileWarning from './views/responsive/MobileWarning.vue'

export default {
  components: {
    SidebarView,
    SectionView,
    MobileWarning
  }
}
</script>

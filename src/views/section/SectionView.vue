<template>
  <div class="flex flex-col w-full">
    <SectionHeader title="Product recruitment" />
    <div class="p-8 flex flex-col space-y-6">
      <SearchBar
        @updateInput="
          ($event) => {
            searchedHelper = $event
          }
        "
        :searched-helper="searchedHelper"
      />
      <ArrayView :searched-helper="searchedHelper" />
    </div>
  </div>
</template>

<script lang="ts">
import SectionHeader from './SectionHeader.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import ArrayView from '@/views/array/ArrayView.vue'

export default {
  components: {
    SectionHeader,
    SearchBar,
    ArrayView
  },

  data() {
    return {
      searchedHelper: ''
    }
  }
}
</script>

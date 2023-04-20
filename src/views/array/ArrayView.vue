<template>
  <div class="border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
    <table class="border-collapse w-full text-text-icon-secondary text-sm">
      <tr class="bg-neutral-50 border-b border-neutral-200 text-xs">
        <td class="pl-6 py-3">Helper</td>
        <td class="p-3">Status</td>
        <td class="p-3">Relation</td>
        <td class="p-3">Points</td>
        <td class="p-3">Joined on</td>
        <td class="p-3">Strong Criteria</td>
        <td class="p-3">Medium Criteria</td>
      </tr>
      <ArrayItem :searched-helper="searchedHelper" :data-array="jsonData.helpers" />
    </table>
  </div>
</template>

<script lang="ts">
import ArrayItem from './ArrayItem.vue'
import json from './data.json'

export default {
  components: {
    ArrayItem
  },

  data() {
    return {
      jsonData: json
    }
  },

  props: {
    searchedHelper: {
      type: String
    }
  }
}
</script>

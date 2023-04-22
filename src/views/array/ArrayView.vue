<template>
  <div class="border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
    <table class="border-collapse w-full text-text-icon-secondary text-sm">
      <tr class="bg-neutral-50 border-b border-neutral-200 text-xs">
        <td class="pl-6 py-1 lg:py-3">Helper</td>
        <td class="p-1 lg:p-3">Status</td>
        <td class="p-1 lg:p-3">Relation</td>
        <td class="p-1 lg:p-3">
          <div class="flex items-center space-x-2">
            <span>Points</span>
            <ArrowIcon css-class="stroke-text-icon-secondary" class="w-2.5 h-2.5" />
          </div>
        </td>
        <td class="hidden lg:table-cell p-3">Joined on</td>
        <td class="p-1 lg:p-3">Strong Criteria</td>
        <td class="p-1 lg:p-3">Medium Criteria</td>
      </tr>
      <ArrayItem
        :searched-helper="searchedHelper"
        :data-array="jsonData.helpers"
        :row-per-page="rowPerPage"
        :selected-page="selectedPage"
      />
      <PaginationView
        :helperCounter="jsonData.helpers.length"
        @pageSelected="
          ($event) => {
            selectedPage = $event
          }
        "
        @updateSelect="
          ($event) => {
            rowPerPage = $event
          }
        "
      />
    </table>
  </div>
</template>

<script lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import ArrayItem from './ArrayItem.vue'
import PaginationView from '@/components/pagination/PaginationView.vue'
import json from './data.json'

export default {
  components: {
    ArrowIcon,
    ArrayItem,
    PaginationView
  },

  data() {
    return {
      jsonData: json,
      rowPerPage: 25,
      selectedPage: 1
    }
  },

  props: {
    searchedHelper: {
      type: String,
      default: ''
    }
  }
}
</script>

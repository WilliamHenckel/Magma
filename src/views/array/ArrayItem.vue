<template>
  <tr
    v-for="(helper, key) in searchedHelper.length >= 1 ? filteredHelpers : paginatedHelpers"
    :key="key"
    class="border-b border-neutral-200 hover:bg-neutral-50 hover:cursor-pointer"
  >
    <td class="flex items-center p-3 pl-6">
      <img
        :src="helper.profilePictureUrl"
        :alt="`${helper.firstname}-${helper.lastname}`"
        class="rounded-full w-8 h-8 mr-3 hidden lg:block"
      />
      <div>
        <p class="text-text-icon-primary">{{ helper.firstname }} {{ helper.lastname }}</p>
        <p class="hidden lg:block text-xs">{{ helper.email }}</p>
      </div>
    </td>
    <td class="p-3">
      <StatusTag :status="helper.status" :button-size="'xs'" :button-text="helper.status" />
    </td>
    <ArrayItemDisplay :item="String(helper.relations)" />
    <ArrayItemDisplay :item="String(helper.points)" />
    <ArrayItemDisplay :item="helper.joinedOn" :is-date="true" />
    <ArrayItemDisplay :item="helper.userCriteria[0].value" />
    <ArrayItemDisplay :item="helper.userCriteria[1].value" />
  </tr>
  <NoResult v-if="filteredHelpers.length === 0" :searched-helper="searchedHelper" />
</template>

<script lang="ts">
import StatusTag from '@/components/status/StatusTag.vue'
import NoResult from '@/components/search/NoResult.vue'
import ArrayItemDisplay from './ArrayItemDisplay.vue'

export default {
  components: {
    StatusTag,
    NoResult,
    ArrayItemDisplay
  },

  props: {
    dataArray: {
      type: Array,
      default: () => []
    },
    searchedHelper: {
      type: String,
      default: ''
    },
    rowPerPage: {
      type: Number,
      default: 25
    },
    selectedPage: {
      type: Number,
      default: 1
    }
  },

  computed: {
    filteredHelpers() {
      let filteredHelpers = this.dataArray

      // Filter by user input
      filteredHelpers = filteredHelpers.filter(
        (helper) =>
          helper.firstname.toLowerCase().includes(this.searchedHelper) ||
          helper.lastname.toLowerCase().includes(this.searchedHelper)
      )

      return filteredHelpers
    },

    paginatedHelpers() {
      let paginatedHelpers = this.dataArray

      // Sort by number of points
      paginatedHelpers.sort((a, b) => (a.points > b.points ? -1 : 1))

      // Slice by user selection & page selection
      let numberedHelpers
      if (this.rowPerPage != 0) {
        numberedHelpers = paginatedHelpers.slice(
          (this.selectedPage - 1) * this.rowPerPage,
          this.selectedPage * this.rowPerPage
        )
      } else {
        numberedHelpers = paginatedHelpers.slice(0)
      }

      return numberedHelpers
    }
  }
}
</script>

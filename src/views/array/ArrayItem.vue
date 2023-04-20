<template>
  <tr
    v-for="(helper, key) in filteredHelpers"
    :key="key"
    class="border-b border-neutral-200 hover:bg-neutral-50 hover:cursor-pointer"
  >
    <td class="flex items-center p-3 pl-6">
      <img
        :src="helper.profilePictureUrl"
        :alt="`${helper.firstname}-${helper.lastname}`"
        class="rounded-full w-8 h-8 mr-3"
      />
      <div>
        <p class="text-text-icon-primary">{{ helper.firstname }} {{ helper.lastname }}</p>
        <p class="text-xs">{{ helper.email }}</p>
      </div>
    </td>
    <td class="p-3">
      <StatusTag :status="helper.status" :button-size="'xs'" :button-text="helper.status" />
    </td>
    <td class="p-3">{{ helper.relations }}</td>
    <td class="p-3">{{ helper.points }}</td>
    <td class="p-3">{{ helper.joinedOn }}</td>
    <td class="p-3">{{ helper.userCriteria[0].value }}</td>
    <td class="p-3">{{ helper.userCriteria[1].value }}</td>
  </tr>
  <NoResult v-if="filteredHelpers.length === 0" :searched-helper="searchedHelper" />
</template>

<script lang="ts">
import StatusTag from '@/components/status/StatusTag.vue'
import NoResult from '@/components/search/NoResult.vue'

export default {
  components: {
    StatusTag,
    NoResult
  },

  props: {
    dataArray: {
      type: Array
    },
    searchedHelper: {
      type: String
    }
  },

  computed: {
    filteredHelpers() {
      let filteredHelpers = this.dataArray

      filteredHelpers = filteredHelpers.filter(
        (helper) =>
          helper.firstname.toLowerCase().includes(this.searchedHelper) ||
          helper.lastname.toLowerCase().includes(this.searchedHelper)
      )

      filteredHelpers.sort((a, b) => (a.points > b.points ? -1 : 1))

      return filteredHelpers
    }
  }
}
</script>

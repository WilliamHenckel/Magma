<template>
  <tr>
    <td class="p-8" colspan="7">
      <div class="flex flex-col items-center justify-center space-y-6">
        <div
          class="w-min rounded-full border-8 border-blue-secondary flex items-center bg-blue-tertiary p-3"
        >
          <SearchIcon css-class="stroke-blue-primary" class="w-5 h-5" />
        </div>
        <div class="text-center">
          <p class="text-base">No helper found</p>
          <p>
            Your search "<span class="font-bold">{{ searchedHelper }}</span
            >" didn't match with any helper.
          </p>
        </div>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import SearchIcon from '../icons/SearchIcon.vue'

export default {
  components: {
    SearchIcon
  },
  props: {
    searchedHelper: {
      type: String
    }
  }
}
</script>

<template>
  <td v-if="!isDate" class="p-1 lg:p-3">{{ item || '-' }}</td>
  <td v-else class="hidden lg:block lg:p-3">
    {{ item ? dayjs(item).format('MMM. DD, YYYY') : '-' }}
  </td>
</template>

<script lang="ts">
import dayjs from 'dayjs/esm/index'

export default {
  data() {
    return {
      dayjs
    }
  },

  props: {
    item: {
      type: String,
      default: ''
    },
    isDate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div>
    <span
      v-for="(item, key) in path"
      :key="key"
      class="text-sm"
      :class="key < path.length - 1 ? 'text-text-icon-secondary' : 'text-text-icon-disabled'"
    >
      <span>{{ item }}</span>
      <span v-if="key < path.length - 1" class="mx-2.5">/</span>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    path: {
      type: Array,
      default: () => []
    }
  }
}
</script>

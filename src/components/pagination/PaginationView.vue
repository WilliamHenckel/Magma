<template>
  <tr>
    <td class="p-3" colspan="7">
      <div v-if="pageCounter > 0" class="flex space-x-3">
        <template v-for="n in pageCounter" :key="n">
          <div
            v-if="n === 1 || (n >= selectedPage - 2 && n <= selectedPage + 2) || n === pageCounter"
            class="w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-neutral-50"
            :class="n === selectedPage ? 'bg-blue-secondary text-blue-primary' : ''"
            @click="newPageSelection(n)"
          >
            {{ n }}
          </div>
          <div v-else>.</div>
        </template>
      </div>
      <select v-model="rowPerPage" @change="rowPerPageSelection()">
        <option selected>25</option>
        <option>50</option>
        <option>100</option>
        <option value="0">All</option>
      </select>
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  data() {
    return {
      rowPerPage: 25,
      selectedPage: 3,
      pagination: []
    }
  },

  props: {
    helperCounter: {
      type: Number
    }
  },

  computed: {
    pageCounter() {
      let pageCounter
      if (this.rowPerPage > 0) {
        pageCounter = Math.ceil(this.helperCounter / this.rowPerPage)
      } else {
        pageCounter = 0
      }
      return pageCounter
    }
  },

  methods: {
    rowPerPageSelection() {
      this.newPageSelection(1)
      this.$emit('updateSelect', this.rowPerPage)
    },

    newPageSelection(n) {
      this.selectedPage = n
      this.$emit('pageSelected', n)
    }
  }
}
</script>

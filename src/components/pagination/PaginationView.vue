<template>
  <tr>
    <td class="p-3" colspan="7">
      <div class="flex justify-between">
        <div v-if="pageCounter > 0" class="flex space-x-3">
          <template v-for="n in pagination" :key="n">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-neutral-50"
              :class="n === selectedPage ? 'bg-blue-secondary text-blue-primary' : ''"
              @click="newPageSelection(n)"
            >
              {{ n }}
            </div>
          </template>
        </div>
        <div class="flex items-center space-x-2">
          <p>Row per page:</p>
          <select
            v-model="rowPerPage"
            @change="rowPerPageSelection()"
            class="p-2 bg-neutral-0 border border-neutral-300 rounded-md"
          >
            <option selected>25</option>
            <option>50</option>
            <option>100</option>
            <option value="0">All</option>
          </select>
        </div>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  data() {
    return {
      rowPerPage: 25,
      selectedPage: 1,
      pagination: []
    }
  },

  props: {
    helperCounter: {
      type: Number,
      default: 0
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
    createPagination(n, limit) {
      this.pagination = []

      for (let i = -2; i < 3; i++) {
        this.pagination.push(n + i)
      }
      this.pagination = this.pagination.filter((item) => item > 1 && item < limit)
      this.pagination.unshift(1)
      this.pagination.push(limit)

      for (let j = 1; j < this.pagination.length; j++) {
        if (this.pagination[j] > this.pagination[j - 1] + 1) {
          this.pagination.splice(j, 0, '...')
        }
      }
    },

    rowPerPageSelection() {
      this.newPageSelection(1)
      this.$emit('updateSelect', this.rowPerPage)
    },

    newPageSelection(n) {
      if (n !== '...') {
        this.selectedPage = n
        this.createPagination(this.selectedPage, this.pageCounter)
        this.$emit('pageSelected', n)
      }
    }
  },

  mounted() {
    this.createPagination(this.selectedPage, this.pageCounter)
  }
}
</script>

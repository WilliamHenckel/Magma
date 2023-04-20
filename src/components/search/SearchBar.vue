<template>
  <div class="relative w-min">
    <input
      type="text"
      v-model="inputValue"
      @input="$emit('updateInput', $event.target.value.toLowerCase())"
      placeholder="Search any helper..."
      class="border border-neutral-300 shadow-xs rounded-md py-2.5 pr-4 pl-10 focus:border-purple-primary focus:outline-0"
      id="searchbar"
    />
    <CrossIcon
      v-if="searchedHelper"
      css-class="stroke-blue-primary"
      class="absolute right-6 top-5 hover:cursor-pointer"
      @click="
        ($event) => {
          $emit('updateInput', '')
          inputValue = ''
        }
      "
    />
  </div>
</template>

<script lang="ts">
import CrossIcon from '../icons/CrossIcon.vue'

export default {
  components: {
    CrossIcon
  },

  data() {
    return {
      inputValue: ''
    }
  },

  props: {
    searchedHelper: {
      type: String
    }
  }
}
</script>

<style scoped>
#searchbar {
  width: 370px;
  background: url('../../assets/search.svg') no-repeat 15px center;
}
</style>

<template>
  <input
    type="text"
    v-model="input"
    placeholder="Search any helper..."
    class="border border-neutral-300 shadow-xs rounded-md py-2.5 pr-4 pl-10"
    id="searchbar"
  />
</template>

<style scoped>
#searchbar {
  width: 370px;
  background: url('../../assets/search.svg') no-repeat 15px center;
}
</style>

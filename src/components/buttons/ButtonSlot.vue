<template>
  <div
    class="flex items-center space-x-2.5 px-4 py-2.5 border border-neutral-200 shadow-xs rounded-full"
  >
    <i>
      <slot name="icon"></slot>
    </i>
    <span class="text-text-icon-secondary text-sm">
      <slot name="text"></slot>
    </span>
  </div>
</template>

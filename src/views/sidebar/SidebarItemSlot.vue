<template>
  <div>
    <div class="flex items-center space-x-2.5">
      <i>
        <slot name="icon"></slot>
      </i>
      <span class="text-neutral-300 text-sm">
        <slot name="title"></slot>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

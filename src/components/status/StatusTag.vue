<template>
  <div
    :class="`${tagConfig.color[status].textColor} ${tagConfig.color[status].bgColor} ${tagConfig.size[buttonSize]}`"
    class="w-min"
  >
    {{ buttonText }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tagConfig: {
        color: {
          overbooked: {
            bgColor: 'bg-red-secondary',
            textColor: 'text-red-primary'
          },
          'highly-active': {
            bgColor: 'bg-purple-secondary',
            textColor: 'text-purple-primary'
          },
          active: {
            bgColor: 'bg-green-secondary',
            textColor: 'text-green-primary'
          },
          observer: {
            bgColor: 'bg-blue-secondary',
            textColor: 'text-blue-primary'
          },
          sleeper: {
            bgColor: 'bg-orange-secondary',
            textColor: 'text-orange-primary'
          },
          invited: {
            bgColor: 'bg-gray-secondary',
            textColor: 'text-gray-primary'
          }
        },
        size: {
          xs: 'text-xs px-1.5 py-0.5 rounded-full',
          sm: 'text-sm px-2 py-0.5 rounded-full'
        }
      }
    }
  },

  props: {
    status: {
      type: String,
      default: ''
    },
    buttonSize: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>

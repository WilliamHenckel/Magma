<template>
  <div
    :class="`${tagConfig.color[buttonColor].textColor} ${tagConfig.color[buttonColor].bgColor} ${tagConfig.size[buttonSize]}`"
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
          red: {
            bgColor: 'bg-red-secondary',
            textColor: 'text-red-primary'
          },
          purple: {
            bgColor: 'bg-purple-secondary',
            textColor: 'text-purple-primary'
          },
          green: {
            bgColor: 'bg-green-secondary',
            textColor: 'text-green-primary'
          },
          blue: {
            bgColor: 'bg-blue-secondary',
            textColor: 'text-blue-primary'
          },
          orange: {
            bgColor: 'bg-orange-secondary',
            textColor: 'text-orange-primary'
          },
          gray: {
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
    buttonColor: {
      type: String
    },
    buttonSize: {
      type: String
    },
    buttonText: {
      type: String
    }
  }
}
</script>

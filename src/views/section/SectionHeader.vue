<template>
  <div class="border-b border-neutral-200 pt-8 pb-9 px-8">
    <BreadcrumbsView :path="path"></BreadcrumbsView>
    <div class="flex justify-between items-center mt-5">
      <div class="flex items-center">
        <h1 class="text-2xl mr-6">{{ title }}</h1>
        <StatusTag :status="'active'" :button-size="'sm'" :button-text="'Published'" />
      </div>
      <ButtonSlot>
        <template #icon>
          <component :is="'EditIcon'" css-class="stroke-text-icon-secondary" class="w-3.5 h-3.5" />
        </template>
        <template #text>Edit campaign</template>
      </ButtonSlot>
    </div>
  </div>
</template>

<script lang="ts">
import BreadcrumbsView from '@/components/breadcrumbs/BreadCrumbs.vue'
import StatusTag from '@/components/status/StatusTag.vue'
import ButtonSlot from '@/components/buttons/ButtonSlot.vue'
import EditIcon from '@/components/icons/EditIcon.vue'

export default {
  components: {
    BreadcrumbsView,
    StatusTag,
    ButtonSlot,
    EditIcon
  },

  data() {
    return {
      path: ['Campaigns', 'Product Recruitment']
    }
  },

  props: {
    title: {
      type: String
    }
  }
}
</script>

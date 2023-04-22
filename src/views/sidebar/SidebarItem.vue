<template>
  <div class="ml-2.5">
    <SidebarItemSlot v-for="(item, key) in data" :key="key" :class="item.submenu ? '' : 'mb-6'">
      <template #icon>
        <component :is="item.icon" css-class="stroke-neutral-300" class="w-3.5 h-3.5" />
      </template>
      <template #title>{{ item.title }}</template>
      <div v-if="item.submenu" class="py-3.5">
        <SidebarSubSlot v-for="(subitem, key) in item.submenu" :key="key">
          <template #title>{{ subitem.title }}</template>
        </SidebarSubSlot>
      </div>
    </SidebarItemSlot>
  </div>
</template>

<script lang="ts">
import SidebarItemSlot from './SidebarItemSlot.vue'
import SidebarSubSlot from './SidebarSubSlot.vue'
import CampaignIcon from '../../components/icons/CampaignIcon.vue'
import ChallengeIcon from '../../components/icons/ChallengeIcon.vue'
import SettingIcon from '../../components/icons/SettingIcon.vue'
import RewardIcon from '../../components/icons/RewardIcon.vue'

export default {
  components: {
    SidebarItemSlot,
    SidebarSubSlot,
    CampaignIcon,
    ChallengeIcon,
    SettingIcon,
    RewardIcon
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

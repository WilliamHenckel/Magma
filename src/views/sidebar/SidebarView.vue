<template>
  <div id="sidebarView" class="bg-neutral-900 h-screen py-8 px-6 flex flex-col justify-between">
    <div>
      <div class="flex items-center space-x-2 mb-12">
        <NetflixIcon class="w-8 h-8" />
        <h1 class="text-neutral-0 text-sm">Netflix</h1>
      </div>

      <SidebarItem :data="menuData1"></SidebarItem>
    </div>
    <div class="text-neutral-300">
      <SidebarItem :data="menuData2"></SidebarItem>
      <div class="flex items-center pt-4 border-t border-text-icon-secondary justify-between">
        <div class="flex items-center">
          <img :src="user.profilePictureUrl" class="w-8 h-8 rounded-full mr-2" />
          <div class="text-neutral-0 text-sm">{{ user.firstname }} {{ user.lastname }}</div>
        </div>
        <LogoutIcon css-class="stroke-neutral-300" class="w-3 h-3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SidebarItem from './SidebarItem.vue'
import NetflixIcon from '@/components/icons/NetflixIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'

export default {
  components: {
    SidebarItem,
    NetflixIcon,
    LogoutIcon
  },

  data() {
    return {
      menuData1: [
        {
          title: 'Campaigns',
          icon: 'CampaignIcon'
        },
        {
          title: 'Challenges',
          icon: 'ChallengeIcon',
          submenu: [{ title: 'Activity' }, { title: 'Setup' }]
        },
        {
          title: 'Rewards',
          icon: 'RewardIcon',
          submenu: [{ title: 'Activity' }, { title: 'Setup' }]
        }
      ],
      menuData2: [
        {
          title: 'Settings',
          icon: 'SettingIcon'
        }
      ],
      user: {
        firstname: 'Jena',
        lastname: 'Kshlerin',
        profilePictureUrl:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/844.jpg'
      }
    }
  }
}
</script>

<style scoped>
#sidebarView {
  width: 256px;
}
</style>

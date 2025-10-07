<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="mx-auto px-3 max-w-lg w-full sm:w-xl ring-1 dark:ring-white/20 ring-gray-900/5 bg-muted backdrop-blur shadow-lg rounded-full"
      :ui="{
        item: 'py-0',
        link: 'relative px-3 py-4 flex items-center justify-center transition hover:text-success-500 dark:hover:text-success-400 data-[active]:text-success-600 dark:data-[active]:text-success-400',
        linkLabel: 'hidden'
      }"
    >
      <template #item="{ item, index, active }">
        <div>
          <UTooltip
            :text="item.label"
            :content="{
              align: 'center',
              side: 'bottom',
              sideOffset: 24
            }"
          >
            <div class="flex justify-center items-center">
              <Icon
                :name="item.icon as string"
                class="w-5 h-5 z-10"
              />
              <span
                v-if="$route.path === item.to"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-success-500/0 via-success-500/70 to-success-500/0 dark:from-success-400/0 dark:via-success-400/40 dark:to-success-400/0"
              />
              <span
                v-if="$route.path === item.to"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <span class="sr-only">{{ item.label }}</span>
            </div>
          </UTooltip>
        </div>
      </template>
      <template #list-trailing>
        <ColorModeButton
          size="lg"
          :ui="{
            icons: {
              light: 'solar:sun-outline',
              dark: 'solar:moon-outline'
            },
            base: 'hover:text-success-500 cursor-pointer'
          }"
        />
      </template>
    </UNavigationMenu>
  </div>
</template>

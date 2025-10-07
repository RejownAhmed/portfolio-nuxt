<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-md">
      <h3 class="text-lg font-medium group-hover:text-success-600">
        {{ project.title }}
      </h3>
      <p class="text-muted text-base">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-muted"
    />
    <UAvatar
      :src="project.thumbnail"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>

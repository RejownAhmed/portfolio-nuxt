<script setup lang="ts">
const { data: page } = await useAsyncData('bookmarks', () => {
  return queryCollection('bookmarks').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})

function getHost(url: string) {
  try {
    const { host } = new URL(url)
    return host.replace('www.', '')
  } catch (e: any) {
    console.log(e)
    return url
  }
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    />
    <UPageSection
      :ui="{
        container: '!pt-0 !pb-0'
      }"
    >
      <ul class="space-y-2">
        <Motion
          v-for="(bookmark, index) in page.links"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <li>
            <a
              :href="bookmark.url"
              target="_blank"
              class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 min-w-0 text-base"
            >
              <UAvatar
                :src="bookmark.icon"
                :alt="bookmark.label"
                :ui="{ root: 'rounded-md' }"
                size="lg"
              />
              <p class="truncate text-gray-700 dark:text-gray-200">
                {{ bookmark.label }}
              </p>
              <span class="flex-1" />
              <span class="text-xs font-medium text-muted">
                {{ getHost(bookmark.url) }}
              </span>
            </a>
            <!-- v-if="index < page.links?.length - 1" -->
            <USeparator
              class="my-2"
              type="dashed"
              color="neutral"
            />
          </li>
        </Motion>
      </ul>
    </UPageSection>
  </UPage>
</template>

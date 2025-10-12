<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
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
    >
      <div
        v-if="page.picture.url"
        class="items-center justify-center shrink-0 select-none align-middle bg-elevated text-2xl hidden dark:block sm:rotate-4 size-36 overflow-hidden rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
      >
        <NuxtImg
          class="h-full w-full rounded-[inherit] object-cover"
          :src="page.picture.url"
          :alt="page.picture?.alt || page.title"
          width="144"
          height="144"
          max-width="auto"
          priority
        />
      </div>
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <MDC
        :value="page.content"
        unwrap="p"
      />
      <div
        class="m-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center py-10 max-w-max"
      >
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          class="inline-block max-w-[145px]"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>

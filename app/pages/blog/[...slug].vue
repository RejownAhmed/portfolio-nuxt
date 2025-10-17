<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui/utils/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'

const route = useRoute()
// remove trailing slash from path
const actualPath = route.path.replace(/\/$/, '')

const { data } = await useAsyncData(`post-${actualPath}`, () =>
  Promise.all([
    queryCollection('blog').path(actualPath).first(),
    queryCollectionItemSurroundings('blog', route.path, {
      fields: ['description']
    })
  ])
)
const page = data.value?.[0]
if (!page)
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })

const surround = data.value?.[1]

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const blogNavigation = computed(
  () => navigation.value.find(item => item.path === '/blog')?.children || []
)

const breadcrumb = computed(() =>
  mapContentNavigation(
    findPageBreadcrumb(blogNavigation?.value, page.path)
  ).map(({ icon, ...link }) => link)
)

if (page.image) {
  defineOgImage({ url: page.image })
} else {
  defineOgImageComponent(
    'Blog',
    {
      headline: breadcrumb.value.map(item => item.label).join(' > ')
    },
    {
      fonts: ['Geist:400', 'Geist:600']
    }
  )
}

const title = page.seo?.title || page.title
const description = page.seo?.description || page.description
const colorMode = useColorMode()

useHead({
  script: [
    {
      'src': 'https://giscus.app/client.js',
      'async': true,
      'crossorigin': 'anonymous',
      'data-repo': 'RejownAhmed/portfolio-nuxt',
      'data-repo-id': 'R_kgDOP72ffg',
      'data-category': 'Blog Posts',
      'data-category-id': 'DIC_kwDOP72ffs4CwwGX',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': () => colorMode.value,
      'data-lang': 'en'
    }
  ]
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

const articleLink = computed(() => `${window?.location}`)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <ULink
          to="/blog"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          Blog
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <div
            class="flex text-xs text-muted items-center justify-center gap-2"
          >
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead"> - </span>
            <span v-if="page.minRead"> {{ page.minRead }} MIN READ </span>
          </div>
          <NuxtImg
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-[300px] object-cover object-center"
          />
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <UUser
              orientation="vertical"
              color="neutral"
              variant="outline"
              class="justify-center items-center text-center"
              v-bind="page.author"
            />
          </div>
        </div>
        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <div class="flex items-center justify-end gap-2 text-sm text-muted">
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="Copy link"
              @click="
                copyToClipboard(articleLink, 'Article link copied to clipboard')
              "
            />
          </div>
          <UContentSurround :surround />
        </UPageBody>
        <div class="giscus pb-5" />
      </UPage>
    </UContainer>
  </UMain>
</template>

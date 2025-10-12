<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  title: 'Rejown Ahmed - Sr. Software Engineer',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'Rejown Ahmed, Web Makers Ltd, Full Stack Software Engineer, Laravel Developer, Vue.js Expert, Nuxt.js Developer, React.js Expert, Next.js Developer, SaaS Developer, SaaS Development Company, SaaS Development Partner, Web Application Developer, WordPress Plugin Developer, API Integration Expert, Front-End Developer, Back-End Developer, JavaScript Developer, PHP Developer, Software Engineer Bangladesh, Hire Laravel Developer, Hire Vue.js Developer, Custom Web Development, Scalable Web Applications, Modern Web Apps, Web Performance Optimization, CTO Web Makers Ltd' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  script: [
    // Google Analytics Tag
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-LR6DZN8VEP',
      async: true
    },
    {
      textContent: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LR6DZN8VEP');
          `,
      type: 'text/javascript'
    },
    // Google Structured Data (JSON-LD)
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Rejown Ahmed Zisan',
        'url': 'https://rejownahmed.me/',
        'image': 'https://rejownahmed.me/we.png',
        'jobTitle': 'Founder & CTO',
        'worksFor': {
          '@type': 'Organization',
          'name': 'WebMakers Ltd',
          'url': 'https://webmakerslimited.com',
          'sameAs': [
            'https://www.linkedin.com/company/webmakersltd',
            'https://github.com/webmakersbd'
          ]
        },
        'knowsAbout': [
          'Full-Stack Web Development',
          'SaaS Development',
          'API Design and Integration',
          'Cloud Computing',
          'DevOps and CI/CD Pipelines',
          'Web Application Architecture',
          'Frontend Development',
          'Backend Development',
          'UI/UX Design',
          'Entrepreneurship',
          'Startup Consulting',
          'Web Design',
          'Laravel',
          'Vue.js',
          'Nuxt.js',
          'PHP',
          'JavaScript',
          'TypeScript',
          'Node.js',
          'WordPress Plugin Development',
          'RESTful APIs',
          'GraphQL',
          'Tailwind CSS',
          'Docker',
          'Nginx',
          'AWS',
          'Cloudflare',
          'Linux Server Management',
          'VPS Deployment',
          'Agile Development',
          'Technical Mentorship',
          'Teaching Web Development',
          'Software Architecture',
          'Open Source Contribution'
        ],
        'birthDate': '2002-04-13',
        'knowsLanguage': [
          { '@type': 'Language', 'name': 'English' },
          { '@type': 'Language', 'name': 'Bangla' },
          { '@type': 'Language', 'name': 'Hindi' }
        ],
        'disambiguatingDescription': 'Bangladeshi Full-stack Web Developer',
        'hasOccupation': {
          '@type': 'Occupation',
          'name': 'Full-Stack Software Engineer',
          'alternateName': 'Software Developer',
          'responsibilities': [
            'Design and develop scalable SaaS applications',
            'Build and maintain backend APIs with Laravel',
            'Develop front-end interfaces using Vue.js and Nuxt.js',
            'Implement CI/CD workflows via GitHub Actions',
            'Manage VPS and cloud infrastructure (AWS, Alibaba Cloud)',
            'Ensure high security, optimization, and performance of web apps',
            'Mentor junior developers and lead technical projects'
          ],
          'skills': [
            'Laravel',
            'Vue.js',
            'Nuxt.js',
            'PHP',
            'JavaScript',
            'TypeScript',
            'SaaS Development',
            'RESTful API Design',
            'GraphQL',
            'MySQL',
            'PostgreSQL',
            'Cloud Computing',
            'Docker',
            'GitHub Actions / CI-CD',
            'DevOps Automation',
            'VPS Configuration',
            'Linux Server Management',
            'Nginx',
            'Apache',
            'Cloudflare Optimization',
            'AWS (EC2, S3, RDS)',
            'Alibaba Cloud',
            'DigitalOcean',
            'Tailwind CSS',
            'Responsive Web Design',
            'Performance Optimization',
            'Security Hardening',
            'WordPress Plugin Development',
            'SEO Optimization',
            'System Architecture Design',
            'Agile & Scrum Practices',
            'Technical Mentorship',
            'Teaching Web Development',
            'Project Management',
            'UI/UX Implementation'
          ],
          'estimatedSalary': [
            {
              '@type': 'MonetaryAmountDistribution',
              'name': 'Typical Salary Range',
              'currency': 'USD',
              'duration': 'P1Y',
              'percentile10': 80000,
              'percentile25': 100000,
              'median': 140000,
              'percentile75': 170000,
              'percentile90': 200000
            }
          ],
          'occupationLocation': [
            { '@type': 'Country', 'name': 'Bangladesh' },
            { '@type': 'Country', 'name': 'United States' },
            { '@type': 'Country', 'name': 'Remote Worldwide' }
          ],
          'industry': 'Software & Technology',
          'yearsExperienceMin': 5,
          'yearsExperienceMax': 7,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            'lastReviewed': '2025-10-05T10:00:00+06:00'
          },
          'description': 'Rejown Ahmed is a remote full-stack software engineer specializing in Laravel, Vue.js, and SaaS architecture with over 5 years of experience.'
        },
        'description': 'Rejown Ahmed is a full-stack software engineer, entrepreneur, and founder of WebMakers Ltd. He builds scalable SaaS products using Laravel, Vue.js, and cloud infrastructure while mentoring developers worldwide.',
        'sameAs': [
          'https://www.linkedin.com/in/rejown-ahmed-zisan',
          'https://github.com/rejownahmed',
          'https://twitter.com/rejownahmed',
          'https://facebook.com/Rejown.ahmed.zisan'
        ],
        'interactionStatistic': [
          {
            '@type': 'InteractionCounter',
            'interactionType': { '@type': 'Action', 'name': 'LikeAction' },
            'userInteractionCount': 10000
          },
          {
            '@type': 'InteractionCounter',
            'interactionType': { '@type': 'Action', 'name': 'FollowAction' },
            'userInteractionCount': 5041
          }
        ],
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Dhaka',
          'addressRegion': 'Dhaka',
          'addressCountry': 'Bangladesh'
        }
      })
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: '/quote.png',
  twitterImage: '/quote.png',
  twitterCard: 'summary_large_image',
  ogDescription: 'Hello👋 I\'m Rejown. A Sr. Full-stack Web Developer building and managing scalable SaaS Applications. I have founded WebMakers Ltd, a SaaS Development Company in Bangladesh',
  twitterDescription: 'Hello👋 I\'m Rejown. A Sr. Full-stack Web Developer building and managing scalable SaaS Applications. I have founded WebMakers Ltd, a SaaS Development Company in Bangladesh',
  ogSiteName: 'Rejown Ahmed Zisan',
  ogUrl: 'https://rejownahmed.me'
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>

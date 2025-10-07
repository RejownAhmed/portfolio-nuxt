import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'solar:home-smile-outline',
    to: '/'
  },
  {
    label: 'About',
    icon: 'i-lucide-user',
    to: '/about'
  },
  {
    label: 'Projects',
    icon: 'solar:folder-with-files-outline',
    to: '/projects'
  },
  {
    label: 'Public Speaking & Seminars',
    icon: 'solar:microphone-2-bold',
    to: '/speaking'
  },
  {
    label: 'Blog',
    icon: 'solar:document-add-outline',
    to: '/blog'
  },
  {
    label: 'Bookmarks',
    icon: 'solar:bookmark-linear',
    to: '/bookmarks'
  }
]

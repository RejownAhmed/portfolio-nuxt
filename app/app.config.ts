export default defineAppConfig({
  global: {
    picture: {
      dark: '/we.png',
      light: '/we.png',
      alt: 'Rejowan Ahmed Zisan With His Son'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/rejown-ahmed-zisan/',
        'target': '_blank',
        'aria-label': 'Rejowan Ahmed on LinkedIn'
      },
      {
        'icon': 'i-simple-icons-facebook',
        'to': 'https://www.facebook.com/Rejowan.Ahmed.Zisan',
        'target': '_blank',
        'aria-label': 'Rejowan Ahmed on Facebook'
      },
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://go.nuxt.com/discord',
        'target': '_blank',
        'aria-label': 'Nuxt on Discord'
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/rejownahmed',
        'target': '_blank',
        'aria-label': 'Rejowan Ahmed on X'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/RejownAhmed',
        'target': '_blank',
        'aria-label': 'Rejowan Ahmed on GitHub'
      }
    ]
  }
})

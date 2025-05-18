// nuxt.config.ts
export default {
  // ──────────────────────────────────────────────────────
  // Enable Nuxt Studio
  studio: {
    enabled: true
  },

  // ──────────────────────────────────────────────────────
  // Content module (with Studio live‑preview API)
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  // ──────────────────────────────────────────────────────
  // Modules (Studio must come first)
  modules: [
    '@nuxthq/studio',   // Nuxt Studio
    '@nuxt/image',      // Image optimization
    '@nuxt/ui-pro',     // Nuxt UI Pro
    '@nuxt/content',    // File‑based CMS
    '@vueuse/nuxt',     // VueUse composables
    'nuxt-og-image'     // Dynamic OG images
  ],

  // ──────────────────────────────────────────────────────
  // Enable Vue devtools in development
  devtools: {
    enabled: true
  },

  // ──────────────────────────────────────────────────────
  // Global CSS
  css: [
    '~/assets/css/main.css'
  ],

  // ──────────────────────────────────────────────────────
  // Custom route rules
  routeRules: {
    '/docs': {
      redirect: '/docs/getting-started',
      prerender: false
    }
  },

  // ──────────────────────────────────────────────────────
  // Future and compatibility flags
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-07-11',

  // ──────────────────────────────────────────────────────
  // Nitro prerender settings
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  }
}

